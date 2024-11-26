export class Item {
    categorie: string;
      name: string;
      photo: string;
      description: string;
      
      constructor(categorie:string, name: string, photo: string, description: string) {
        this.name = name;
        this.photo = photo;
        this.categorie = categorie
        this.description = description
      
      }
    }
    