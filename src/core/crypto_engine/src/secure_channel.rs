use sodiumoxide::crypto::{box_, secretbox, sign};
use crate::secure_memory::SecureMemoryRegion;
use std::time::{SystemTime, Duration};
use tokio::sync::mpsc;

pub struct SecureChannel {
    channel_key: SecureMemoryRegion,
    ratchet: Ratchet,
    sender: mpsc::Sender<EncryptedMessage>,
    receiver: mpsc::Receiver<EncryptedMessage>,
    peer_public_key: box_::PublicKey,
    last_ratchet: SystemTime,
}

impl SecureChannel {
    pub async fn new(
        peer_public_key: box_::PublicKey,
        options: ChannelOptions,
    ) -> Result<Self, ChannelError> {
        let (tx, rx) = mpsc::channel(100);
        
        let channel = Self {
            channel_key: unsafe { SecureMemoryRegion::new(32)? },
            ratchet: Ratchet::new()?,
            sender: tx,
            receiver: rx,
            peer_public_key,
            last_ratchet: SystemTime::now(),
        };

        // Iniciar protocolo de establecimiento de canal
        channel.perform_handshake().await?;

        Ok(channel)
    }

    pub async fn send(&mut self, message: &[u8]) -> Result<(), ChannelError> {
        // Verificar si necesitamos rotar claves
        self.check_ratchet()?;

        // Cifrar mensaje
        let encrypted = self.encrypt_message(message)?;

        // Enviar mensaje cifrado
        self.sender.send(encrypted).await?;

        Ok(())
    }

    pub async fn receive(&mut self) -> Result<Vec<u8>, ChannelError> {
        // Recibir mensaje cifrado
        let encrypted = self.receiver.recv().await
            .ok_or(ChannelError::ChannelClosed)?;

        // Verificar integridad
        if !self.verify_message_integrity(&encrypted)? {
            return Err(ChannelError::IntegrityViolation);
        }

        // Descifrar mensaje
        let decrypted = self.decrypt_message(&encrypted)?;

        Ok(decrypted)
    }

    async fn perform_handshake(&self) -> Result<(), ChannelError> {
        // Generar par de claves efímeras
        let (ephemeral_pk, ephemeral_sk) = box_::gen_keypair();

        // Enviar clave pública efímera
        let handshake = HandshakeMessage {
            ephemeral_public_key: ephemeral_pk,
            signature: self.sign_handshake(&ephemeral_pk)?,
        };

        self.sender.send(handshake.into()).await?;

        // Recibir respuesta
        let response = self.receiver.recv().await
            .ok_or(ChannelError::HandshakeFailed)?;

        // Verificar respuesta
        self.verify_handshake_response(response)?;

        Ok(())
    }

    fn check_ratchet(&mut self) -> Result<(), ChannelError> {
        let now = SystemTime::now();
        if now.duration_since(self.last_ratchet)? > Duration::from_secs(300) {
            self.ratchet.advance()?;
            self.last_ratchet = now;
        }
        Ok(())
    }
} 