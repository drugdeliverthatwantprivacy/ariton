import { useCallback, useEffect, useRef } from 'react';

// Hook para memoizar valores que no necesitan actualizarse
export function useConstant<T>(fn: () => T): T {
  const ref = useRef<{ value: T }>();
  if (!ref.current) {
    ref.current = { value: fn() };
  }
  return ref.current.value;
}

// Hook para detectar si el componente está montado
export function useMounted() {
  const mounted = useRef(false);
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return mounted;
}

// Hook para debounce de funciones
export function useDebounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
) {
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
} 