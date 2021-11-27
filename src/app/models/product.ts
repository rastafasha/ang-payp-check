export class Product {
  id: number;
  name:string;
  description: string;
  category:string
  price:number;
  imageUrl: string;

  constructor(id, name, description, category, price, imageUrl ){
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
