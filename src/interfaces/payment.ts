// Define la interfaz para el evento de pago exitoso.
export interface PaymentSuccessEvent extends CustomEvent {
  detail: {
    nonce: string;
    paymentType: string;
  };
}

// Define la interfaz para la data enviada al endpoint de pago.
export interface PaymentData {
  nombre: string;
  email: string;
  telefono: string;
  direccion: string;
  ciudad: string;
  codigoPostal: string;
  nonce: string;
  monto: number;
  metodoPago: string;
  producto: {
    nombre: string;
    precioUnitario: number;
    cantidad: number;
    subtotal: number;
  };
  descuento: {
    codigo: string;
    tipo: 'percent' | 'fixed';
    valor: number;
    montoDescuento: number;
  } | null;
}