import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { CardCarouselProductPromoComponent } from '../card-carousel-product-promo/card-carousel-product-promo.component';
import { CardProductComponent } from '../card-product/card-product.component';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.page.html',
  styleUrls: ['./list-product.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,HeaderComponent,CardCarouselProductPromoComponent,CardProductComponent]
})
export class ListProductPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
