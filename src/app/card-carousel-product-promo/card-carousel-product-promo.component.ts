import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { ProductsService } from '../Service/products.service';
import { Promotion } from '../models/promotion.model';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid, IonCol, IonRow, IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { CardButtonQuantityComponent } from '../card-button-quantity/card-button-quantity.component';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-card-carousel-product-promo',
  templateUrl: './card-carousel-product-promo.component.html',
  styleUrls: ['./card-carousel-product-promo.component.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonCol,
    IonRow,
    CommonModule,
    CardButtonQuantityComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CardCarouselProductPromoComponent implements OnInit {
  productsPromoList: Promotion[] = [];

  // Options pour Swiper
  slideOpts = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: { clickable: true },
    navigation: true, // Activer la navigation
    loop: true,
  };

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.loadProductsPromo();
  }

  loadProductsPromo() {
    this.productsService.getProductPromoList().subscribe(
      (res) => {
        if (res && res.promotions) {
          this.productsPromoList = res.promotions;
        }
      },
      (err) => {
        console.error('Erreur lors de la récupération des produits en promotion', err);
      }
    );
  }
}
