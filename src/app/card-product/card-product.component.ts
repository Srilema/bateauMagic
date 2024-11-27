import { Component, OnInit } from '@angular/core';
import { IonCol, IonTitle, IonHeader, IonToolbar, IonCard,IonContent,IonGrid,IonRow,IonCardHeader,IonCardSubtitle,IonCardTitle,IonCardContent } from '@ionic/angular/standalone';
import { ProductsService } from '../Service/products.service';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';
import { CardButtonQuantityComponent } from "../card-button-quantity/card-button-quantity.component";

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
  standalone: true,
  imports: [IonCard, IonCol, IonContent, IonGrid, IonRow, IonCardHeader, IonCardSubtitle, IonCardTitle, CommonModule, CardButtonQuantityComponent], 
})
export class CardProductComponent implements OnInit {
  productsList!:Product[];
  constructor(private productsService:ProductsService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productsService.getProductList().subscribe(res=>{
      this.productsList = res.products;},
      err=>{
        console.log('erreur product list')
      }
    );
  }
}
