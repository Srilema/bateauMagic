import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor(private httpClient:HttpClient) { 
  }

  getPanier(){
    return this.httpClient.get<{products: Product[]}>('assets/panier.json')
  }
}
