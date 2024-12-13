import CryptoJS from 'crypto-js';
import { v4 as uuidv4 } from 'uuid';

const SECRET_KEY = process.env.REACT_APP_ENCRYPTION_KEY || uuidv4();
const IV_LENGTH = 16;

export class SecurityService {
  private static instance: SecurityService;
  private failedAttempts: Map<string, { count: number; timestamp: number }> = new Map();
  private readonly MAX_FAILED_ATTEMPTS = 5;
  private readonly LOCKOUT_DURATION = 15 * 60 * 1000; // 15 minutos

  private constructor() {
    // Rotación periódica de claves
    setInterval(this.rotateKeys.bind(this), 24 * 60 * 60 * 1000); // Cada 24 horas
  }

  static getInstance(): SecurityService {
    if (!SecurityService.instance) {
      SecurityService.instance = new SecurityService();
    }
    return SecurityService.instance;
  }

  private generateIV(): string {
    return CryptoJS.lib.WordArray.random(IV_LENGTH).toString();
  }

  private rotateKeys(): void {
    const newKey = uuidv4();
    // Reencriptar datos existentes con la nueva clave
    // Implementar lógica de reencriptación aquí
  }

  private checkRateLimit(identifier: string): boolean {
    const attempt = this.failedAttempts.get(identifier);
    if (attempt) {
      if (attempt.count >= this.MAX_FAILED_ATTEMPTS) {
        const timeDiff = Date.now() - attempt.timestamp;
        if (timeDiff < this.LOCKOUT_DURATION) {
          throw new Error('Cuenta bloqueada temporalmente por seguridad');
        }
        this.failedAttempts.delete(identifier);
      }
    }
    return true;
  }

  private recordFailedAttempt(identifier: string): void {
    const attempt = this.failedAttempts.get(identifier) || { count: 0, timestamp: Date.now() };
    attempt.count++;
    attempt.timestamp = Date.now();
    this.failedAttempts.set(identifier, attempt);
  }

  encrypt(data: any, customKey?: string): string {
    try {
      const iv = this.generateIV();
      const key = customKey || SECRET_KEY;
      const jsonString = JSON.stringify(data);
      
      // Añadir sal aleatoria
      const salt = CryptoJS.lib.WordArray.random(128/8);
      
      // Derivar clave con PBKDF2
      const key256Bits = CryptoJS.PBKDF2(key, salt, {
        keySize: 256/32,
        iterations: 1000
      });

      const encrypted = CryptoJS.AES.encrypt(jsonString, key256Bits, {
        iv: CryptoJS.enc.Hex.parse(iv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });

      // Combinar IV, sal y datos encriptados
      return JSON.stringify({
        iv,
        salt: salt.toString(),
        data: encrypted.toString()
      });
    } catch (error) {
      console.error('Error al encriptar:', error);
      throw new Error('Error de encriptación');
    }
  }

  decrypt(encryptedData: string, customKey?: string): any {
    try {
      const key = customKey || SECRET_KEY;
      const { iv, salt, data } = JSON.parse(encryptedData);

      // Derivar clave con PBKDF2
      const key256Bits = CryptoJS.PBKDF2(key, CryptoJS.enc.Hex.parse(salt), {
        keySize: 256/32,
        iterations: 1000
      });

      const decrypted = CryptoJS.AES.decrypt(data, key256Bits, {
        iv: CryptoJS.enc.Hex.parse(iv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });

      return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
    } catch (error) {
      console.error('Error al desencriptar:', error);
      throw new Error('Error de desencriptación');
    }
  }

  hashPassword(password: string): string {
    // Generar sal única para cada contraseña
    const salt = CryptoJS.lib.WordArray.random(128/8);
    
    // Usar PBKDF2 para el hash
    const hash = CryptoJS.PBKDF2(password, salt, {
      keySize: 512/32,
      iterations: 10000
    });

    return JSON.stringify({
      hash: hash.toString(),
      salt: salt.toString()
    });
  }

  verifyPassword(password: string, hashedPassword: string): boolean {
    const { hash, salt } = JSON.parse(hashedPassword);
    
    const verifyHash = CryptoJS.PBKDF2(password, CryptoJS.enc.Hex.parse(salt), {
      keySize: 512/32,
      iterations: 10000
    }).toString();

    return hash === verifyHash;
  }

  generateToken(length: number = 32): string {
    const token = CryptoJS.lib.WordArray.random(length);
    const timestamp = Date.now().toString();
    const signature = CryptoJS.HmacSHA256(token + timestamp, SECRET_KEY);
    
    return JSON.stringify({
      token: token.toString(),
      timestamp,
      signature: signature.toString()
    });
  }

  validateToken(token: string): boolean {
    try {
      const { token: tokenValue, timestamp, signature } = JSON.parse(token);
      const expectedSignature = CryptoJS.HmacSHA256(tokenValue + timestamp, SECRET_KEY).toString();
      
      // Verificar firma
      if (signature !== expectedSignature) {
        return false;
      }

      // Verificar expiración (24 horas)
      const tokenAge = Date.now() - parseInt(timestamp);
      if (tokenAge > 24 * 60 * 60 * 1000) {
        return false;
      }

      return true;
    } catch {
      return false;
    }
  }

  // Método para sanitizar datos de entrada
  sanitizeInput(input: string): string {
    return input
      .replace(/[<>]/g, '') // Prevenir XSS
      .replace(/'/g, ''') // Prevenir SQL Injection
      .trim();
  }
}

export const securityService = SecurityService.getInstance(); 