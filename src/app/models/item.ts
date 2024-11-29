export class Item {
    categorie: string;
      name: string;
      photo: string;
      description: string;
      photoTemplate: string;
      
      constructor(categorie:string, name: string, photo: string, description: string, photoTemplate: string) {
        this.name = name;
        this.photo = photo;
        this.categorie = categorie
        this.description = description
        this.photoTemplate = photoTemplate
      }
    }
    