import { Component, NgModule } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonImg } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { restaurantOutline, boatOutline, pizzaOutline } from 'ionicons/icons';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, HeaderComponent, IonImg],
})
export class HomePage {
  constructor() {
    addIcons({restaurantOutline, boatOutline, pizzaOutline});
  }
}
