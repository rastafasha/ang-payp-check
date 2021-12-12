import { Product } from './product';
export class CartItemModel {

    productId: number;
    productName: string;
    productPrice:number;
    description:string;
    qty:number;
    category:string;

    constructor(product: Product){
      this.productId= product.id;
      this.productName = product.name;
      this.category = product.category;
      this.description = product.description;
      this.productPrice = product.price;
      this.qty = 1;
    }

}
