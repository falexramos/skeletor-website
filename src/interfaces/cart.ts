// Define la estructura para el estado completo del carrito.
export interface CartState {
  unitPrice: number;
  quantity: number;
  subtotal: number;
  discountAmount: number;
  total: number;
  appliedCoupon: {
    code: string;
    discount: number;
    type: 'percent' | 'fixed';
  } | null;
}

// Define la estructura para un cupón individual.
export interface Coupon {
  discount: number;
  type: 'percent' | 'fixed';
}