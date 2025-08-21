// Define la estructura de los detalles del producto.
export interface ProductDetails {
  id: string;
  name: string;
  unitPrice: number;
  quantity?: number;
  description?: string;
  image?: string;
}