import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Promotion } from '../models/promotion.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productList!: Product[];
  constructor(private http:HttpClient) { }

  getProductList(){
    return this.http.get<{products:Product[]}>('assets/products.json');
  }
  getProductPromoList(){
    return this.http.get<{promotions:Promotion[]}>('assets/products.json');
  }
}
