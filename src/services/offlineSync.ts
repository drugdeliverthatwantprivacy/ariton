import { p2pNetwork } from '../utils/p2pSecureNetwork';
import { ultraSecurityService } from '../utils/ultraSecureEncryption';

interface SyncData {
  id: string;
  timestamp: number;
  type: 'create' | 'update' | 'delete';
  data: any;
}

export class OfflineSyncService {
  private static instance: OfflineSyncService;
  private syncQueue: SyncData[] = [];
  private readonly SYNC_INTERVAL = 10000; // 10 segundos

  private constructor() {
    this.startSync();
  }

  static getInstance(): OfflineSyncService {
    if (!OfflineSyncService.instance) {
      OfflineSyncService.instance = new OfflineSyncService();
    }
    return OfflineSyncService.instance;
  }

  private startSync(): void {
    setInterval(async () => {
      await this.syncWithPeers();
    }, this.SYNC_INTERVAL);
  }

  private async syncWithPeers(): Promise<void> {
    const peers = p2pNetwork.getActivePeers();
    
    for (const peer of peers) {
      try {
        // Enviar datos pendientes
        if (this.syncQueue.length > 0) {
          await p2pNetwork.sendToPeer(peer.id, {
            type: 'sync',
            data: await ultraSecurityService.encrypt(this.syncQueue)
          });
        }
      } catch (error) {
        console.error(`Error sincronizando con peer ${peer.id}:`, error);
      }
    }
  }

  // API Pública
  async queueChange(type: 'create' | 'update' | 'delete', data: any): Promise<void> {
    const syncData: SyncData = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      type,
      data
    };

    this.syncQueue.push(syncData);
    await this.syncWithPeers();
  }

  async processSyncData(syncData: SyncData[]): Promise<void> {
    // Implementar lógica de resolución de conflictos
    for (const item of syncData) {
      // Aplicar cambios localmente
      switch (item.type) {
        case 'create':
          // Implementar creación
          break;
        case 'update':
          // Implementar actualización
          break;
        case 'delete':
          // Implementar eliminación
          break;
      }
    }
  }
}

export const offlineSync = OfflineSyncService.getInstance(); 