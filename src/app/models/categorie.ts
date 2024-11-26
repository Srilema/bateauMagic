import { Item } from "./item";

export class Categorie {
    id: number;
    name: string;
    items: Item[];
    
    constructor(id: number, name: string,items: Item[]) {
        this.id = id;
        this.name = name;
        this.items = items;
    }
}
