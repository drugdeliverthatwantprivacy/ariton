export const APP_CONFIG = {
  name: 'Mi Aplicación',
  version: '1.0.0',
  api: {
    baseUrl: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
    timeout: 10000,
    encryption: {
      enabled: true,
      algorithm: 'AES-256',
    },
  },
  security: {
    tokenExpiration: 3600, // 1 hora
    passwordMinLength: 8,
    passwordRequirements: {
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true,
    },
    rateLimiting: {
      maxAttempts: 5,
      timeWindow: 300, // 5 minutos
    },
    cors: {
      allowedOrigins: [
        'http://localhost:3000',
        'https://tu-dominio.com',
      ],
    },
    headers: {
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';",
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    },
  },
  theme: {
    defaultMode: 'light',
    defaultLanguage: 'es',
  },
  routes: {
    home: '/',
    dashboard: '/dashboard',
    profile: '/profile',
    settings: '/settings',
    about: '/about',
  },
  features: {
    darkMode: true,
    notifications: true,
    analytics: true,
  },
}; 