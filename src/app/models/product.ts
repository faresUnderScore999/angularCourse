/**
 * Product domain model: the shape of every product in the catalogue.
 */
export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  likes: number;
}