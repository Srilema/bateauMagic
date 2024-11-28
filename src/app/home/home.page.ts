import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonItem, IonIcon, IonImg } from '@ionic/angular/standalone';
import { Item } from '../models/item';
import { ItemsService } from '../Services/items.service';
import { addIcons } from 'ionicons';
import { boatOutline, pizzaOutline, restaurantOutline } from 'ionicons/icons';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonImg, IonIcon, IonButton, IonContent, CommonModule, HeaderComponent],
})
export class HomePage {
  list !:Item[];
  selectedCategory: any;
  constructor(private router: Router, private itemsService:ItemsService) {
    addIcons({restaurantOutline, boatOutline, pizzaOutline});
  }

  ngOnInit() {
    
    };
 
    OnCardList(categorie:string){
      this.router.navigate(['/item-list',categorie]);
    }

    OnProducts(){
      this.router.navigate(['/list-product']);
    }
}