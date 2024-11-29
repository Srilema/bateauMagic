import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Promotion } from '../models/promotion.model';
import { Storage } from '@ionic/storage';

const store = new Storage();

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  selectedQuantity!: any;
  selectedProduct!: Product | Promotion;
  panier!:any;
  produitCharger: any;
  listProduitPanier:any =[];
  storage!:Storage;
  productPanier!: { product: any, quantity: number }[];
  constructor(private httpClient:HttpClient) { 
    store.create();
  }

  getPanier(){
     return store.get('product')
  }
  

  setSelectedProduct(product: Product | Promotion) {
    this.selectedProduct = product;
  }

  getSelectedProduct(): Product | Promotion {
    return this.selectedProduct;
  }

  setSelectedQuantity(quantity: any) {
    this.selectedQuantity = quantity;
  }

  getSelectedQuantity():any {
    return this.selectedQuantity;
  }

  async savePanier(product: Product) {
    if (!this.storage) {
      this.storage = await store.create();
    }
    const panierExistant = await this.storage.get('product');
    this.listProduitPanier = Array.isArray(panierExistant) ? panierExistant : [];
    this.listProduitPanier.push(product);
    await this.storage.set('product', this.listProduitPanier);
    console.log('panierExistant :', panierExistant);
  }
  clearStorage(){
    store.clear();
  }
  
  
  
}
