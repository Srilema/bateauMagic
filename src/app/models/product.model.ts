<<<<<<< HEAD
export class Product {        
    name: string;        
    description: string; 
    price: number;      
    imageUrl: string;

    constructor(name:string, description:string, price:number, imageUrl:string){
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}
=======
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
>>>>>>> master
