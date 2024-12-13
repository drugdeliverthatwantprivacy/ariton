import init, { CryptoEngine } from '../core/crypto_engine/pkg';

export class SecureEngine {
  private static instance: SecureEngine;
  private engine: CryptoEngine | null = null;
  
  private constructor() {
    this.initialize();
  }

  private async initialize() {
    // Inicializar WASM
    await init();
    this.engine = new CryptoEngine();
  }

  static getInstance(): SecureEngine {
    if (!SecureEngine.instance) {
      SecureEngine.instance = new SecureEngine();
    }
    return SecureEngine.instance;
  }

  async sendMonero(amount: number, address: string, options: {
    ringSize?: number;
  } = {}): Promise<string> {
    if (!this.engine) throw new Error('Engine not initialized');

    const ringSize = options.ringSize || 16;
    return await this.engine.send_monero(
      BigInt(amount * 1e12), // Convertir a piconeros
      address,
      ringSize
    );
  }

  async sendZcash(amount: number, address: string, options: {
    memo?: string;
  } = {}): Promise<string> {
    if (!this.engine) throw new Error('Engine not initialized');

    return await this.engine.send_zcash(
      BigInt(amount * 1e8), // Convertir a zatoshis
      address,
      options.memo
    );
  }
} 