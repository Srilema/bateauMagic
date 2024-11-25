import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonItem } from '@ionic/angular/standalone';
import { Item } from '../models/item';
import { ItemsService } from '../Services/items.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonItem, IonList, IonButton, IonHeader, IonToolbar, IonTitle, IonContent,CommonModule],
})
export class HomePage {
  list !:Item[];
  selectedCategory: any;
  constructor(private router: Router, private itemsService:ItemsService) {}

  ngOnInit() {
    
    };
 
    OnCardList(categorie:string){
      this.router.navigate(['/item-list',categorie]);
    }
}
