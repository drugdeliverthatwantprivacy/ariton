use std::alloc::{alloc, dealloc, Layout};
use std::ptr::{self, NonNull};
use std::sync::atomic::{AtomicU64, Ordering};
use zeroize::Zeroize;
use sodiumoxide::utils::memzero;

#[derive(Debug)]
pub enum MemoryError {
    AllocationFailed,
    CanaryTampered,
    GuardPageViolation,
    MemoryCorruption,
}

pub struct SecureMemoryRegion {
    ptr: NonNull<u8>,
    layout: Layout,
    canary: AtomicU64,
    guard_pages: Vec<NonNull<u8>>,
}

impl SecureMemoryRegion {
    pub unsafe fn new(size: usize) -> Result<Self, MemoryError> {
        // Alinear tamaño a página
        let page_size = get_page_size();
        let aligned_size = (size + page_size - 1) & !(page_size - 1);
        
        // Crear layout con alineación
        let layout = Layout::from_size_align(aligned_size, page_size)
            .map_err(|_| MemoryError::AllocationFailed)?;

        // Allocar memoria con páginas de guarda
        let ptr = NonNull::new(alloc(layout))
            .ok_or(MemoryError::AllocationFailed)?;

        // Configurar páginas de guarda
        let mut guard_pages = Vec::new();
        guard_pages.push(allocate_guard_page()?);
        guard_pages.push(allocate_guard_page()?);

        // Generar canario aleatorio
        let canary = AtomicU64::new(generate_random_canary());

        let mut region = Self {
            ptr,
            layout,
            canary,
            guard_pages,
        };

        // Inicializar memoria de forma segura
        region.initialize_memory()?;

        Ok(region)
    }

    pub fn write(&mut self, data: &[u8]) -> Result<(), MemoryError> {
        // Verificar integridad antes de escribir
        self.verify_integrity()?;

        unsafe {
            // Copiar datos con verificación de límites
            if data.len() > self.layout.size() {
                return Err(MemoryError::AllocationFailed);
            }

            ptr::copy_nonoverlapping(
                data.as_ptr(),
                self.ptr.as_ptr(),
                data.len()
            );

            // Actualizar canario
            self.update_canary();
        }

        Ok(())
    }

    pub fn read(&self, buf: &mut [u8]) -> Result<usize, MemoryError> {
        // Verificar integridad antes de leer
        self.verify_integrity()?;

        unsafe {
            let len = buf.len().min(self.layout.size());
            ptr::copy_nonoverlapping(
                self.ptr.as_ptr(),
                buf.as_mut_ptr(),
                len
            );
            Ok(len)
        }
    }

    fn verify_integrity(&self) -> Result<(), MemoryError> {
        // Verificar canario
        if !self.verify_canary() {
            return Err(MemoryError::CanaryTampered);
        }

        // Verificar páginas de guarda
        if !self.verify_guard_pages() {
            return Err(MemoryError::GuardPageViolation);
        }

        Ok(())
    }

    fn initialize_memory(&mut self) -> Result<(), MemoryError> {
        unsafe {
            // Limpiar memoria
            ptr::write_bytes(self.ptr.as_ptr(), 0, self.layout.size());
            
            // Configurar protecciones de memoria
            if !mprotect_readwrite(self.ptr.as_ptr(), self.layout.size()) {
                return Err(MemoryError::AllocationFailed);
            }

            // Configurar páginas de guarda como no-acceso
            for guard in &self.guard_pages {
                if !mprotect_none(guard.as_ptr(), get_page_size()) {
                    return Err(MemoryError::AllocationFailed);
                }
            }
        }

        Ok(())
    }
}

impl Drop for SecureMemoryRegion {
    fn drop(&mut self) {
        unsafe {
            // Limpiar memoria de forma segura
            memzero(self.ptr.as_ptr(), self.layout.size());
            
            // Desalocar memoria
            dealloc(self.ptr.as_ptr(), self.layout);
            
            // Limpiar páginas de guarda
            for guard in &self.guard_pages {
                dealloc(guard.as_ptr(), Layout::from_size_align_unchecked(
                    get_page_size(),
                    get_page_size()
                ));
            }
        }
    }
} 