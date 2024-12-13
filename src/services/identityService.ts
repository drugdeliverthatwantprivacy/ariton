import { initWasm, IdentityGenerator } from '../core/crypto_engine/pkg';

interface AnonymousIdentity {
  username: string;
  displayName: string;
  avatarEmoji: string;
  colorScheme: {
    primary: string;
    secondary: string;
  };
}

export class IdentityService {
  private static instance: IdentityService;
  private generator: IdentityGenerator | null = null;

  private constructor() {
    this.initialize();
  }

  private async initialize() {
    await initWasm();
    this.generator = new IdentityGenerator();
  }

  static getInstance(): IdentityService {
    if (!IdentityService.instance) {
      IdentityService.instance = new IdentityService();
    }
    return IdentityService.instance;
  }

  async generateRandomIdentity(): Promise<AnonymousIdentity> {
    if (!this.generator) {
      throw new Error('Identity generator not initialized');
    }

    return this.generator.generate_identity();
  }
} 