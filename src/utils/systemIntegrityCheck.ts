import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import { sodium } from 'libsodium-wrappers';

interface SystemCheck {
  timestamp: number;
  status: 'secure' | 'compromised' | 'unknown';
  details: string[];
}

export class SystemIntegrityChecker {
  private static instance: SystemIntegrityChecker;
  private readonly CRITICAL_PROCESSES = ['node', 'chrome', 'firefox'];
  private readonly TRUSTED_SIGNATURES = new Set<string>();
  private readonly CHECK_INTERVAL = 60000; // 1 minuto

  private constructor() {
    this.initializeTrustedSignatures();
    this.startPeriodicChecks();
  }

  static getInstance(): SystemIntegrityChecker {
    if (!SystemIntegrityChecker.instance) {
      SystemIntegrityChecker.instance = new SystemIntegrityChecker();
    }
    return SystemIntegrityChecker.instance;
  }

  private initializeTrustedSignatures(): void {
    // Cargar firmas confiables de procesos
    this.CRITICAL_PROCESSES.forEach(process => {
      try {
        const binary = readFileSync(`/usr/bin/${process}`);
        const signature = sodium.crypto_generichash(binary);
        this.TRUSTED_SIGNATURES.add(signature.toString('hex'));
      } catch {
        // Silently fail
      }
    });
  }

  private async checkSystemIntegrity(): Promise<SystemCheck> {
    const issues: string[] = [];

    try {
      // Verificar procesos en ejecución
      if (this.detectSuspiciousProcesses()) {
        issues.push('Procesos sospechosos detectados');
      }

      // Verificar integridad de binarios críticos
      if (await this.verifyBinaryIntegrity()) {
        issues.push('Binarios del sistema modificados');
      }

      // Verificar rootkits conocidos
      if (this.detectRootkits()) {
        issues.push('Posible rootkit detectado');
      }

      // Verificar hooks del sistema
      if (this.detectSystemHooks()) {
        issues.push('Hooks del sistema detectados');
      }

      // Verificar módulos del kernel cargados
      if (this.checkKernelModules()) {
        issues.push('Módulos del kernel sospechosos');
      }

    } catch (error) {
      issues.push(`Error en verificación: ${error.message}`);
    }

    return {
      timestamp: Date.now(),
      status: issues.length === 0 ? 'secure' : 'compromised',
      details: issues
    };
  }

  private detectSuspiciousProcesses(): boolean {
    try {
      const processes = execSync('ps aux').toString();
      const suspicious = [
        'wireshark',
        'tcpdump',
        'netsniff',
        'ettercap',
        'bettercap',
        'aircrack'
      ];

      return suspicious.some(proc => processes.includes(proc));
    } catch {
      return false;
    }
  }

  private async verifyBinaryIntegrity(): Promise<boolean> {
    for (const process of this.CRITICAL_PROCESSES) {
      try {
        const binary = readFileSync(`/usr/bin/${process}`);
        const signature = sodium.crypto_generichash(binary);
        if (!this.TRUSTED_SIGNATURES.has(signature.toString('hex'))) {
          return true; // Binario modificado
        }
      } catch {
        continue;
      }
    }
    return false;
  }

  private detectRootkits(): boolean {
    try {
      // Verificar archivos ocultos en directorios del sistema
      const hiddenFiles = execSync('find /proc -name ".*" -type f').toString();
      if (hiddenFiles.length > 0) return true;

      // Verificar procesos ocultos
      const visiblePids = execSync('ps -e | wc -l').toString();
      const actualPids = execSync('ls /proc | grep -E "^[0-9]+$" | wc -l').toString();
      
      return parseInt(visiblePids) !== parseInt(actualPids);
    } catch {
      return false;
    }
  }

  private detectSystemHooks(): boolean {
    try {
      // Verificar hooks de syscall
      const syscalls = readFileSync('/proc/sys/kernel/ftrace_enabled', 'utf8');
      if (syscalls.trim() === '1') {
        const hooks = execSync('cat /sys/kernel/debug/tracing/available_filter_functions').toString();
        return hooks.includes('sys_');
      }
    } catch {
      // Silently fail
    }
    return false;
  }

  private checkKernelModules(): boolean {
    try {
      const modules = execSync('lsmod').toString();
      const suspicious = [
        'rookit',
        'hide_proc',
        'suterusu',
        'diamorphine'
      ];

      return suspicious.some(mod => modules.includes(mod));
    } catch {
      return false;
    }
  }

  private startPeriodicChecks(): void {
    setInterval(async () => {
      const check = await this.checkSystemIntegrity();
      if (check.status === 'compromised') {
        this.handleCompromisedSystem(check);
      }
    }, this.CHECK_INTERVAL);
  }

  private handleCompromisedSystem(check: SystemCheck): void {
    console.error('¡SISTEMA COMPROMETIDO!', check.details);
    // Implementar protocolo de emergencia
    // - Detener comunicaciones
    // - Notificar a peers confiables
    // - Iniciar procedimiento de limpieza
  }

  // API Pública
  async verifySystemSecurity(): Promise<boolean> {
    const check = await this.checkSystemIntegrity();
    return check.status === 'secure';
  }
}

export const systemChecker = SystemIntegrityChecker.getInstance(); 