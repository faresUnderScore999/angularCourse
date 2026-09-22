import { Component, computed, signal } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  /* ---- Demo list of products, held in a signal so likes stay live ---- */
  protected readonly products = signal<Product[]>([
    { id: 1, name: 'Wireless Keyboard', price: 59.99, quantity: 24, likes: 0 },
    { id: 2, name: 'Ergonomic Mouse', price: 39.5, quantity: 18, likes: 0 },
    { id: 3, name: 'USB-C Hub', price: 49.99, quantity: 31, likes: 0 },
    { id: 4, name: '27" 4K Monitor', price: 349.0, quantity: 9, likes: 0 },
    { id: 5, name: 'Laptop Stand', price: 29.9, quantity: 42, likes: 0 }
  ]);

  /* ---- Totals derived from the list ---- */
  protected readonly totalStock = computed(() =>
    this.products().reduce((sum, product) => sum + product.quantity, 0)
  );

  protected readonly totalValue = computed(() =>
    this.products().reduce((sum, product) => sum + product.price * product.quantity, 0)
  );

  protected like(product: Product) {
    this.products.update((list) =>
      list.map((item) =>
        item.id === product.id ? { ...item, likes: item.likes + 1 } : item
      )
    );
  }

  protected dislike(product: Product) {
    this.products.update((list) =>
      list.map((item) =>
        item.id === product.id
          ? { ...item, likes: item.likes > 0 ? item.likes - 1 : 0 }
          : item
      )
    );
  }

  protected formatPrice(price: number): string {
    return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }
}