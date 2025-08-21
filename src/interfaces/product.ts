// Define la estructura de los detalles del producto.
export interface ProductDetails {
  name: string;
  unitPrice: number;
  quantity?: number;
  description?: string;
  image?: string;
}