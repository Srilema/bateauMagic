export class Product {
    categorie: string;
      name: string;
      photo: string;
      quantity: number;
      price: number;
      
      constructor(categorie:string, name: string, photo: string, quantity:number, price:number) {
        this.name = name;
        this.photo = photo;
        this.categorie = categorie;
        this.quantity = quantity;
        this.price=price
      }
    }
