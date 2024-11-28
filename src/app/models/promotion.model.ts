export class Promotion {
    name: string;
    originalPrice:string;
    promoPrice:string;
    discount:string;
    description:string;
    imageUrl:string;

    constructor(name:string, originalPrice:string, promotionPrice:string,discount:string, description:string, imageUrl:string){
        this.name = name;
        this.originalPrice = originalPrice;
        this.promoPrice = promotionPrice;
        this.discount = discount;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}
