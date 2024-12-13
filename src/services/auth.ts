import { securityService } from '../utils/encryption';
import { secureStorage } from '../utils/secureStorage';
import { APP_CONFIG } from '../config/app';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

export class AuthService {
  private static instance: AuthService;
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'user_data';

  private constructor() {}

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async login(credentials: LoginCredentials): Promise<User> {
    try {
      const hashedPassword = securityService.hashPassword(credentials.password);
      
      // Aquí iría tu llamada a la API real
      const response = await fetch(`${APP_CONFIG.api.baseUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Request-ID': securityService.generateToken(),
        },
        body: JSON.stringify({
          email: credentials.email,
          password: hashedPassword,
        }),
      });

      if (!response.ok) throw new Error('Error de autenticación');

      const data = await response.json();
      
      // Guardar token y datos del usuario de forma segura
      secureStorage.setItem(this.TOKEN_KEY, data.token);
      secureStorage.setItem(this.USER_KEY, data.user);

      return data.user;
    } catch (error) {
      console.error('Error en login:', error);
      throw error;
    }
  }

  logout(): void {
    secureStorage.removeItem(this.TOKEN_KEY);
    secureStorage.removeItem(this.USER_KEY);
  }

  getAuthToken(): string | null {
    return secureStorage.getItem(this.TOKEN_KEY);
  }

  getCurrentUser(): User | null {
    return secureStorage.getItem(this.USER_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getAuthToken();
  }
}

export const authService = AuthService.getInstance(); 