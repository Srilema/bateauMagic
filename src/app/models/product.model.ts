export class Product {
    categorie: string;
      name: string;
      photo: string;
      quantity: number;
      price: number;
      imageUrl: string;
      
      constructor(categorie:string, name: string, photo: string, quantity:number, price:number, imageUrl: string) {
        this.name = name;
        this.photo = photo;
        this.categorie = categorie;
        this.quantity = quantity;
        this.price=price
        this.imageUrl = imageUrl
      }
    }

