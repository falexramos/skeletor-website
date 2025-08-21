// Define la interfaz para el objeto global de utilidades de modales.
export interface ModalUtils {
  show: (message?: string, options?: any) => void;
  hide: () => void;
  toggle: (message?: string, options?: any) => void;
}