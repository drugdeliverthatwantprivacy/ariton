use crate::secure_memory::SecureMemoryRegion;
use std::sync::atomic::{AtomicU64, Ordering};
use rand::{Rng, thread_rng};

pub struct MemoryMixer {
    regions: Vec<SecureMemoryRegion>,
    counter: AtomicU64,
}

impl MemoryMixer {
    pub fn new() -> Result<Self, MixerError> {
        Ok(Self {
            regions: Vec::new(),
            counter: AtomicU64::new(0),
        })
    }

    pub fn mix_memory(&mut self) -> Result<(), MixerError> {
        // Mezclar datos en memoria para evitar análisis
        let mut rng = thread_rng();
        
        for region in &mut self.regions {
            // Leer datos actuales
            let mut buffer = vec![0u8; region.size()];
            region.read(&mut buffer)?;
            
            // Mezclar datos
            for chunk in buffer.chunks_mut(64) {
                let noise: [u8; 64] = rng.gen();
                for (b, n) in chunk.iter_mut().zip(noise.iter()) {
                    *b ^= n;
                }
            }
            
            // Escribir datos mezclados
            region.write(&buffer)?;
        }

        self.counter.fetch_add(1, Ordering::SeqCst);
        Ok(())
    }

    pub fn add_region(&mut self, size: usize) -> Result<(), MixerError> {
        let region = unsafe { SecureMemoryRegion::new(size)? };
        self.regions.push(region);
        Ok(())
    }
}

impl Drop for MemoryMixer {
    fn drop(&mut self) {
        // Limpiar todas las regiones de forma segura
        for region in &mut self.regions {
            let zeros = vec![0u8; region.size()];
            let _ = region.write(&zeros);
        }
    }
} 