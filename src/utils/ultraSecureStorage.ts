import { ultraSecurityService } from './ultraSecureEncryption';
import { randomBytes } from 'crypto';

export class UltraSecureStorageService {
  private static instance: UltraSecureStorageService;
  private readonly PREFIX = 'ultra_secure_';
  private readonly VERSION = 'v2';
  private readonly MAX_STORAGE_AGE = 12 * 60 * 60 * 1000; // 12 horas
  private readonly SECURE_MEMORY = new Map<string, { data: any; timestamp: number; accessCount: number }>();
  private readonly MAX_ACCESS_COUNT = 10; // Límite de accesos antes de rotar datos

  private constructor() {
    this.initializeSecureEnvironment();
    this.startSecurityMonitoring();
  }

  private async initializeSecureEnvironment(): Promise<void> {
    // Verificar ambiente seguro
    if (!this.isSecureEnvironment()) {
      throw new Error('Ambiente no seguro detectado');
    }

    // Inicializar protecciones
    this.setupSecurityListeners();
    await this.verifyStorageIntegrity();
  }

  private isSecureEnvironment(): boolean {
    // Verificar si el ambiente es seguro
    return (
      !window.navigator.userAgent.includes('Tor') && // No es Tor Browser
      window.crypto && 
      window.crypto.subtle &&
      !window.chrome?.runtime?.id // No es una extensión de Chrome
    );
  }

  private setupSecurityListeners(): void {
    // Detectar debugger
    setInterval(() => {
      const startTime = performance.now();
      debugger;
      const endTime = performance.now();
      
      if (endTime - startTime > 100) {
        this.handleSecurityBreach('Debugger detectado');
      }
    }, 1000);

    // Detectar DevTools
    window.addEventListener('devtoolschange', () => {
      this.handleSecurityBreach('DevTools detectadas');
    });
  }

  private handleSecurityBreach(reason: string): void {
    console.error(`[VIOLACIÓN DE SEGURIDAD] ${reason}`);
    this.SECURE_MEMORY.clear();
    localStorage.clear();
    window.location.href = '/security-breach';
  }

  // API Pública
  async setItem(key: string, value: any, options: { 
    expiresIn?: number;
    maxAccess?: number;
    requiresBiometrics?: boolean;
  } = {}): Promise<void> {
    const secureKey = await this.generateSecureKey(key);
    const encryptedData = await ultraSecurityService.encrypt({
      data: value,
      timestamp: Date.now(),
      expiresIn: options.expiresIn || this.MAX_STORAGE_AGE,
      maxAccess: options.maxAccess || this.MAX_ACCESS_COUNT,
      fingerprint: this.generateFingerprint(),
      noise: randomBytes(32).toString('hex')
    });

    // Almacenar en memoria segura
    this.SECURE_MEMORY.set(secureKey, {
      data: encryptedData,
      timestamp: Date.now(),
      accessCount: 0
    });

    // Backup encriptado en localStorage
    localStorage.setItem(
      `${this.PREFIX}${this.VERSION}_${secureKey}`,
      encryptedData
    );
  }

  async getItem(key: string): Promise<any> {
    const secureKey = await this.generateSecureKey(key);
    const memoryData = this.SECURE_MEMORY.get(secureKey);

    if (memoryData) {
      if (memoryData.accessCount >= this.MAX_ACCESS_COUNT) {
        // Rotar datos si se excede el límite de accesos
        await this.rotateData(secureKey);
      }

      memoryData.accessCount++;
      const decrypted = await ultraSecurityService.decrypt(memoryData.data);
      
      if (this.isDataExpired(decrypted)) {
        this.removeItem(key);
        return null;
      }

      return decrypted.data;
    }

    return null;
  }

  private async rotateData(key: string): Promise<void> {
    const data = this.SECURE_MEMORY.get(key);
    if (data) {
      const decrypted = await ultraSecurityService.decrypt(data.data);
      await this.setItem(key, decrypted.data);
    }
  }

  private async generateSecureKey(key: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(key);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }

  private generateFingerprint(): string {
    return [
      navigator.userAgent,
      navigator.language,
      screen.width,
      screen.height,
      new Date().getTimezoneOffset()
    ].join('|');
  }

  private isDataExpired(data: any): boolean {
    return Date.now() - data.timestamp > data.expiresIn;
  }

  private async verifyStorageIntegrity(): Promise<void> {
    // Verificar integridad del almacenamiento
    const keys = Object.keys(localStorage);
    for (const key of keys) {
      if (key.startsWith(this.PREFIX)) {
        try {
          const data = localStorage.getItem(key);
          if (data) {
            await ultraSecurityService.decrypt(data);
          }
        } catch {
          // Datos corruptos o manipulados
          localStorage.removeItem(key);
        }
      }
    }
  }
}

export const ultraSecureStorage = UltraSecureStorageService.getInstance(); 