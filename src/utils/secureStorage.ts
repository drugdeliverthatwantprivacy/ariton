import { securityService } from './encryption';

export class SecureStorageService {
  private static instance: SecureStorageService;
  private readonly PREFIX = 'secure_';
  private readonly VERSION = 'v1';
  private memoryCache: Map<string, { data: any; timestamp: number }> = new Map();
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

  private constructor() {
    // Limpiar datos expirados periódicamente
    setInterval(this.cleanExpiredData.bind(this), 60 * 60 * 1000); // Cada hora
    
    // Escuchar cambios en otros tabs
    window.addEventListener('storage', this.handleStorageChange.bind(this));
  }

  static getInstance(): SecureStorageService {
    if (!SecureStorageService.instance) {
      SecureStorageService.instance = new SecureStorageService();
    }
    return SecureStorageService.instance;
  }

  private getFullKey(key: string): string {
    return `${this.PREFIX}${this.VERSION}_${key}`;
  }

  private cleanExpiredData(): void {
    const now = Date.now();
    // Limpiar caché en memoria
    this.memoryCache.forEach((value, key) => {
      if (now - value.timestamp > this.CACHE_DURATION) {
        this.memoryCache.delete(key);
      }
    });

    // Limpiar localStorage
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith(this.PREFIX)) {
        try {
          const data = JSON.parse(localStorage.getItem(key) || '');
          if (now - data.timestamp > this.CACHE_DURATION) {
            localStorage.removeItem(key);
          }
        } catch (error) {
          console.error('Error al limpiar datos:', error);
          localStorage.removeItem(key);
        }
      }
    });
  }

  private handleStorageChange(event: StorageEvent): void {
    if (event.key?.startsWith(this.PREFIX)) {
      // Actualizar caché en memoria cuando cambia el localStorage
      const key = event.key.replace(`${this.PREFIX}${this.VERSION}_`, '');
      if (event.newValue === null) {
        this.memoryCache.delete(key);
      } else {
        try {
          const parsed = JSON.parse(event.newValue);
          this.memoryCache.set(key, {
            data: securityService.decrypt(parsed.data),
            timestamp: parsed.timestamp
          });
        } catch (error) {
          console.error('Error al sincronizar datos:', error);
        }
      }
    }
  }

  setItem(key: string, value: any, expiresIn?: number): void {
    try {
      const sanitizedKey = securityService.sanitizeInput(key);
      const fullKey = this.getFullKey(sanitizedKey);
      const timestamp = Date.now();
      
      const encryptedData = securityService.encrypt({
        data: value,
        timestamp,
        expiresIn
      });

      // Guardar en localStorage
      localStorage.setItem(fullKey, JSON.stringify({
        data: encryptedData,
        timestamp
      }));

      // Actualizar caché en memoria
      this.memoryCache.set(sanitizedKey, { data: value, timestamp });
    } catch (error) {
      console.error('Error al guardar datos:', error);
      throw new Error('Error al guardar datos de forma segura');
    }
  }

  getItem(key: string): any {
    try {
      const sanitizedKey = securityService.sanitizeInput(key);
      
      // Intentar obtener de la caché en memoria primero
      const cachedData = this.memoryCache.get(sanitizedKey);
      if (cachedData && Date.now() - cachedData.timestamp < this.CACHE_DURATION) {
        return cachedData.data;
      }

      const fullKey = this.getFullKey(sanitizedKey);
      const storedValue = localStorage.getItem(fullKey);
      if (!storedValue) return null;

      const { data, timestamp } = JSON.parse(storedValue);
      const decrypted = securityService.decrypt(data);

      // Verificar expiración
      if (decrypted.expiresIn && Date.now() - timestamp > decrypted.expiresIn) {
        this.removeItem(key);
        return null;
      }

      // Actualizar caché en memoria
      this.memoryCache.set(sanitizedKey, {
        data: decrypted.data,
        timestamp
      });

      return decrypted.data;
    } catch (error) {
      console.error('Error al obtener datos:', error);
      return null;
    }
  }

  removeItem(key: string): void {
    const sanitizedKey = securityService.sanitizeInput(key);
    const fullKey = this.getFullKey(sanitizedKey);
    localStorage.removeItem(fullKey);
    this.memoryCache.delete(sanitizedKey);
  }

  clear(): void {
    // Limpiar solo los items que pertenecen a nuestra aplicación
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith(this.PREFIX)) {
        localStorage.removeItem(key);
      }
    });
    this.memoryCache.clear();
  }
}

export const secureStorage = SecureStorageService.getInstance(); 