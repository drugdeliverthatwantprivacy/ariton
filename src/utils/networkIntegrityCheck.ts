import { sodium } from 'libsodium-wrappers';
import { networkInterfaces, cpus } from 'os';
import { execSync } from 'child_process';

interface NetworkCheck {
  timestamp: number;
  status: 'secure' | 'compromised' | 'unknown';
  details: string[];
}

export class NetworkIntegrityChecker {
  private static instance: NetworkIntegrityChecker;
  private readonly CHECKS_INTERVAL = 30000; // 30 segundos
  private lastCheck: NetworkCheck | null = null;
  private compromisedIPs: Set<string> = new Set();
  private trustedMACs: Set<string> = new Set();

  private constructor() {
    this.initializeTrustedDevices();
    this.startPeriodicChecks();
  }

  static getInstance(): NetworkIntegrityChecker {
    if (!NetworkIntegrityChecker.instance) {
      NetworkIntegrityChecker.instance = new NetworkIntegrityChecker();
    }
    return NetworkIntegrityChecker.instance;
  }

  private initializeTrustedDevices(): void {
    // Añadir MACs de dispositivos confiables
    this.trustedMACs.add('00:11:22:33:44:55'); // Ejemplo
  }

  private async checkNetworkIntegrity(): Promise<NetworkCheck> {
    const issues: string[] = [];
    
    try {
      // Verificar interfaces de red
      const interfaces = networkInterfaces();
      for (const [name, nets] of Object.entries(interfaces)) {
        if (!nets) continue;
        
        for (const net of nets) {
          // Detectar interfaces promiscuas
          if (this.isPromiscuousMode(name)) {
            issues.push(`Interface ${name} en modo promiscuo`);
          }

          // Verificar MAC spoofing
          if (!this.trustedMACs.has(net.mac)) {
            issues.push(`MAC no confiable detectada: ${net.mac}`);
          }

          // Detectar ARP spoofing
          if (this.detectARPSpoofing(net.address)) {
            issues.push(`Posible ARP spoofing en ${net.address}`);
          }
        }
      }

      // Verificar DNS
      if (await this.checkDNSIntegrity()) {
        issues.push('Posible DNS hijacking detectado');
      }

      // Verificar routing
      if (this.detectRoutingAttacks()) {
        issues.push('Posible ataque de routing detectado');
      }

    } catch (error) {
      issues.push(`Error en verificación: ${error.message}`);
    }

    const check: NetworkCheck = {
      timestamp: Date.now(),
      status: issues.length === 0 ? 'secure' : 'compromised',
      details: issues
    };

    this.lastCheck = check;
    return check;
  }

  private isPromiscuousMode(interface: string): boolean {
    try {
      const result = execSync(`ifconfig ${interface}`).toString();
      return result.toLowerCase().includes('promisc');
    } catch {
      return false;
    }
  }

  private detectARPSpoofing(ip: string): boolean {
    try {
      const arpTable = execSync('arp -a').toString();
      const duplicateMACs = new Map<string, string[]>();

      arpTable.split('\n').forEach(line => {
        const match = line.match(/\(([\d.]+)\) at ([0-9A-F:]{17})/i);
        if (match) {
          const [, ip, mac] = match;
          if (!duplicateMACs.has(mac)) {
            duplicateMACs.set(mac, []);
          }
          duplicateMACs.get(mac)!.push(ip);
        }
      });

      for (const [mac, ips] of duplicateMACs.entries()) {
        if (ips.length > 1) {
          this.compromisedIPs.add(...ips);
          return true;
        }
      }
    } catch {
      // Silently fail
    }
    return false;
  }

  private async checkDNSIntegrity(): Promise<boolean> {
    const knownDomains = [
      { domain: 'google.com', expectedIP: '142.250.200.78' },
      { domain: 'cloudflare.com', expectedIP: '104.16.124.96' }
    ];

    for (const { domain, expectedIP } of knownDomains) {
      try {
        const result = await new Promise<string>((resolve) => {
          const dns = require('dns');
          dns.resolve4(domain, (err: Error, addresses: string[]) => {
            if (err) resolve('error');
            else resolve(addresses[0]);
          });
        });

        if (result !== expectedIP) {
          return true; // Posible DNS hijacking
        }
      } catch {
        continue;
      }
    }
    return false;
  }

  private detectRoutingAttacks(): boolean {
    try {
      const routes = execSync('netstat -r').toString();
      const suspiciousRoutes = [
        '0.0.0.0/0',
        '::/0'
      ];

      return suspiciousRoutes.some(route => routes.includes(route));
    } catch {
      return false;
    }
  }

  private startPeriodicChecks(): void {
    setInterval(async () => {
      const check = await this.checkNetworkIntegrity();
      if (check.status === 'compromised') {
        this.handleCompromisedNetwork(check);
      }
    }, this.CHECKS_INTERVAL);
  }

  private handleCompromisedNetwork(check: NetworkCheck): void {
    // Implementar acciones de respuesta
    console.error('¡RED COMPROMETIDA!', check.details);
    // Notificar a los peers
    // Iniciar protocolo de emergencia
  }

  // API Pública
  async verifyNetworkSecurity(): Promise<boolean> {
    const check = await this.checkNetworkIntegrity();
    return check.status === 'secure';
  }

  getLastCheck(): NetworkCheck | null {
    return this.lastCheck;
  }

  isIPCompromised(ip: string): boolean {
    return this.compromisedIPs.has(ip);
  }
}

export const networkChecker = NetworkIntegrityChecker.getInstance(); 