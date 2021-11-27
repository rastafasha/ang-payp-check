import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product [] = [
    new Product(1, 'Far Cary 6', 'Esto es un juego muy chulo', 'VIDEO_GAME', 63.17, 'https://m.media-amazon.com/images/I/81AQ0wvcS-L._SL1500_.jpg'),
    new Product(2, 'Assassins Creed Valhalla', 'Esto es un juego muy chulo','VIDEO_GAME',  24.99, 'https://m.media-amazon.com/images/I/817zvXdCgSL._SL1500_.jpg'),
    new Product(3, 'Spider-Man: Miles Morales', 'Esto es un juego muy chulo','VIDEO_GAME',  46.00, 'https://m.media-amazon.com/images/I/71CqfmZX3PL._SL1361_.jpg'),
    new Product(4, 'Call of Duty: Vanguard', 'Esto es un juego muy chulo', 'VIDEO_GAME', 86.96, 'https://m.media-amazon.com/images/I/71gPbEcd1pL._SL1378_.jpg'),
    new Product(5, 'Demons Souls', 'Esto es un juego muy chulo','VIDEO_GAME', 49.95, 'https://m.media-amazon.com/images/I/81QoNRp5+WL._SL1353_.jpg'),
    new Product(6, 'Call of Duty: Black Ops Cold War', 'Esto es un juego muy chulo','VIDEO_GAME',  40.99, 'https://m.media-amazon.com/images/I/81QfmDJdOdS._SL1500_.jpg')
  ]

  constructor() { }

  getProducts(): Product[]{
    return this.products;
  }
}
