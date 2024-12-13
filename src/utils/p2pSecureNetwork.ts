import { sodium } from 'libsodium-wrappers';
import { ultraSecurityService } from './ultraSecureEncryption';
import dgram from 'dgram';
import { networkInterfaces } from 'os';

interface Peer {
  id: string;
  address: string;
  port: number;
  publicKey: Buffer;
  lastSeen: number;
  status: 'active' | 'disconnected';
}

export class P2PSecureNetwork {
  private static instance: P2PSecureNetwork;
  private readonly PORT_RANGE = { start: 49152, end: 65535 };
  private readonly BROADCAST_INTERVAL = 5000;
  private readonly PEER_TIMEOUT = 30000;
  private socket: dgram.Socket;
  private peers: Map<string, Peer> = new Map();
  private localKeyPair: { publicKey: Buffer; privateKey: Buffer };
  private readonly MAX_MESSAGE_SIZE = 65507; // UDP max size
  private readonly CHUNK_SIZE = 60000;

  private constructor() {
    this.initializeP2P();
  }

  static getInstance(): P2PSecureNetwork {
    if (!P2PSecureNetwork.instance) {
      P2PSecureNetwork.instance = new P2PSecureNetwork();
    }
    return P2PSecureNetwork.instance;
  }

  private async initializeP2P(): Promise<void> {
    await sodium.ready;
    this.localKeyPair = sodium.crypto_box_keypair();
    this.socket = dgram.createSocket('udp4');
    
    // Encontrar puerto disponible
    let port = this.PORT_RANGE.start;
    while (port <= this.PORT_RANGE.end) {
      try {
        await this.bindPort(port);
        break;
      } catch {
        port++;
      }
    }

    this.setupSocketListeners();
    this.startPeerDiscovery();
    this.startPeerMaintenance();
  }

  private bindPort(port: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.socket.bind(port, () => {
        this.socket.setBroadcast(true);
        resolve();
      }).on('error', reject);
    });
  }

  private setupSocketListeners(): void {
    this.socket.on('message', async (message, rinfo) => {
      try {
        const decrypted = await this.decryptMessage(message);
        if (decrypted.type === 'discovery') {
          this.handleDiscovery(decrypted.data, rinfo);
        } else if (decrypted.type === 'data') {
          this.handleData(decrypted.data);
        }
      } catch (error) {
        console.error('Error procesando mensaje:', error);
      }
    });
  }

  private async encryptMessage(data: any, recipientPublicKey: Buffer): Promise<Buffer> {
    const nonce = sodium.randombytes_buf(sodium.crypto_box_NONCEBYTES);
    const encrypted = sodium.crypto_box_easy(
      Buffer.from(JSON.stringify(data)),
      nonce,
      recipientPublicKey,
      this.localKeyPair.privateKey
    );

    return Buffer.concat([nonce, encrypted]);
  }

  private async decryptMessage(message: Buffer): Promise<any> {
    const nonce = message.slice(0, sodium.crypto_box_NONCEBYTES);
    const encrypted = message.slice(sodium.crypto_box_NONCEBYTES);

    const decrypted = sodium.crypto_box_open_easy(
      encrypted,
      nonce,
      this.localKeyPair.publicKey,
      this.localKeyPair.privateKey
    );

    return JSON.parse(decrypted.toString());
  }

  private startPeerDiscovery(): void {
    setInterval(() => {
      const discoveryMessage = {
        type: 'discovery',
        data: {
          id: this.getLocalPeerId(),
          publicKey: this.localKeyPair.publicKey.toString('base64')
        }
      };

      // Broadcast a todas las interfaces de red locales
      const interfaces = networkInterfaces();
      Object.values(interfaces).forEach(iface => {
        if (!iface) return;
        iface.forEach(addr => {
          if (addr.family === 'IPv4' && !addr.internal) {
            const broadcastAddr = this.getBroadcastAddress(addr.address, addr.netmask);
            this.broadcast(discoveryMessage, broadcastAddr);
          }
        });
      });
    }, this.BROADCAST_INTERVAL);
  }

  private getBroadcastAddress(ip: string, netmask: string): string {
    const ipParts = ip.split('.').map(Number);
    const maskParts = netmask.split('.').map(Number);
    return ipParts.map((part, i) => (part | (~maskParts[i] & 255))).join('.');
  }

  private async broadcast(message: any, address: string): Promise<void> {
    const encrypted = await this.encryptMessage(message, this.localKeyPair.publicKey);
    this.socket.send(encrypted, this.PORT_RANGE.start, address);
  }

  private handleDiscovery(data: any, rinfo: dgram.RemoteInfo): void {
    const peer: Peer = {
      id: data.id,
      address: rinfo.address,
      port: rinfo.port,
      publicKey: Buffer.from(data.publicKey, 'base64'),
      lastSeen: Date.now(),
      status: 'active'
    };

    this.peers.set(peer.id, peer);
  }

  private startPeerMaintenance(): void {
    setInterval(() => {
      const now = Date.now();
      for (const [id, peer] of this.peers.entries()) {
        if (now - peer.lastSeen > this.PEER_TIMEOUT) {
          peer.status = 'disconnected';
          this.peers.delete(id);
        }
      }
    }, this.PEER_TIMEOUT);
  }

  // API Pública
  async sendToPeer(peerId: string, data: any): Promise<void> {
    const peer = this.peers.get(peerId);
    if (!peer || peer.status !== 'active') {
      throw new Error('Peer no disponible');
    }

    const encryptedData = await ultraSecurityService.encrypt(data);
    const chunks = this.splitIntoChunks(Buffer.from(encryptedData));
    
    for (const chunk of chunks) {
      const message = {
        type: 'data',
        data: chunk.toString('base64'),
        total: chunks.length,
        index: chunks.indexOf(chunk)
      };

      const encrypted = await this.encryptMessage(message, peer.publicKey);
      this.socket.send(encrypted, peer.port, peer.address);
    }
  }

  private splitIntoChunks(data: Buffer): Buffer[] {
    const chunks: Buffer[] = [];
    for (let i = 0; i < data.length; i += this.CHUNK_SIZE) {
      chunks.push(data.slice(i, i + this.CHUNK_SIZE));
    }
    return chunks;
  }

  getActivePeers(): Peer[] {
    return Array.from(this.peers.values())
      .filter(peer => peer.status === 'active');
  }

  private getLocalPeerId(): string {
    return this.localKeyPair.publicKey.toString('base64').slice(0, 16);
  }

  // Limpieza
  destroy(): void {
    this.socket.close();
    sodium.memzero(this.localKeyPair.privateKey);
    this.peers.clear();
  }
}

export const p2pNetwork = P2PSecureNetwork.getInstance(); 