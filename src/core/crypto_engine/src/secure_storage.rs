use sodiumoxide::crypto::{secretbox, pwhash};
use crate::secure_memory::SecureMemoryRegion;
use std::path::PathBuf;
use std::fs::{File, OpenOptions};
use std::io::{Read, Write, Seek, SeekFrom};
use zeroize::Zeroize;

pub struct SecureStorage {
    storage_path: PathBuf,
    master_key: SecureMemoryRegion,
    temp_buffer: SecureMemoryRegion,
    integrity_verifier: IntegrityVerifier,
}

impl SecureStorage {
    pub fn new(path: PathBuf) -> Result<Self, StorageError> {
        let master_key = unsafe { SecureMemoryRegion::new(secretbox::KEYBYTES)? };
        let temp_buffer = unsafe { SecureMemoryRegion::new(1024 * 1024)? }; // 1MB buffer

        Ok(Self {
            storage_path: path,
            master_key,
            temp_buffer,
            integrity_verifier: IntegrityVerifier::new(),
        })
    }

    pub fn store_encrypted(&mut self, key: &str, data: &[u8]) -> Result<(), StorageError> {
        // Generar salt único
        let salt = pwhash::gen_salt();
        
        // Derivar clave de encriptación
        let mut derived_key = [0u8; secretbox::KEYBYTES];
        pwhash::derive_key(
            &mut derived_key,
            key.as_bytes(),
            &salt,
            pwhash::OPSLIMIT_SENSITIVE,
            pwhash::MEMLIMIT_SENSITIVE
        )?;

        // Generar nonce
        let nonce = secretbox::gen_nonce();

        // Cifrar datos
        let encrypted = secretbox::seal(
            data,
            &nonce,
            &secretbox::Key(derived_key)
        );

        // Generar MAC
        let mac = self.generate_mac(&encrypted, &salt)?;

        // Escribir a archivo de forma segura
        let mut file = self.create_secure_file(key)?;
        file.write_all(&salt.0)?;
        file.write_all(&nonce.0)?;
        file.write_all(&mac)?;
        file.write_all(&encrypted)?;
        file.sync_all()?;

        // Limpiar claves de memoria
        derived_key.zeroize();

        Ok(())
    }

    pub fn read_encrypted(&mut self, key: &str) -> Result<Vec<u8>, StorageError> {
        let mut file = File::open(self.get_file_path(key))?;
        
        // Leer salt, nonce y MAC
        let mut salt = [0u8; pwhash::SALTBYTES];
        let mut nonce = [0u8; secretbox::NONCEBYTES];
        let mut mac = [0u8; 32];
        
        file.read_exact(&mut salt)?;
        file.read_exact(&mut nonce)?;
        file.read_exact(&mut mac)?;

        // Leer datos cifrados
        let mut encrypted = Vec::new();
        file.read_to_end(&mut encrypted)?;

        // Verificar MAC
        if !self.verify_mac(&encrypted, &salt, &mac)? {
            return Err(StorageError::IntegrityViolation);
        }

        // Derivar clave
        let mut derived_key = [0u8; secretbox::KEYBYTES];
        pwhash::derive_key(
            &mut derived_key,
            key.as_bytes(),
            &pwhash::Salt(salt),
            pwhash::OPSLIMIT_SENSITIVE,
            pwhash::MEMLIMIT_SENSITIVE
        )?;

        // Descifrar datos
        let decrypted = secretbox::open(
            &encrypted,
            &secretbox::Nonce(nonce),
            &secretbox::Key(derived_key)
        )?;

        // Limpiar claves
        derived_key.zeroize();

        Ok(decrypted)
    }

    fn create_secure_file(&self, key: &str) -> Result<File, StorageError> {
        let path = self.get_file_path(key);
        
        // Crear directorio si no existe
        if let Some(parent) = path.parent() {
            std::fs::create_dir_all(parent)?;
        }

        // Abrir archivo con permisos restrictivos
        OpenOptions::new()
            .write(true)
            .create(true)
            .truncate(true)
            .mode(0o600) // Solo lectura/escritura para el propietario
            .open(path)
            .map_err(StorageError::from)
    }

    fn generate_mac(&self, data: &[u8], salt: &[u8]) -> Result<[u8; 32], StorageError> {
        use sha2::{Sha256, Digest};
        let mut hasher = Sha256::new();
        hasher.update(data);
        hasher.update(salt);
        Ok(hasher.finalize().into())
    }
} 