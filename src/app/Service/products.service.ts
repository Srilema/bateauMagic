import { Injectable } from '@angular/core';
import { Product } from '../Interface/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productList!: Product[];
  constructor(private http:HttpClient) { }

  getProductList(){
    return this.http.get<{products:Product[]}>('assets/products.json');
  }
}
