export class Product {
    categorie: string;
      name: string;
      photo: string;
      quantity: number;
      price: number;
      description:string;
      
      constructor(categorie:string, name: string, photo: string, quantity:number, price:number, description:string) {
        this.name = name;
        this.photo = photo;
        this.categorie = categorie;
        this.quantity = quantity;
        this.price=price;
        this.description=description;
    }
}
