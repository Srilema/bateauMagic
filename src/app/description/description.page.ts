import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonIcon, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { Item } from '../models/item';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
  standalone: true,
  imports: [HeaderComponent, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton]
})
export class DescriptionPage implements OnInit {
  Title: string = "Restaurant de l'hotel";
  Description: string = "Description du restaurant";
  photoUrl: string = "..\assets\photos\restaurant\photo.jpeg";
  isProduit: boolean = false;
  item!: Item;
  constructor(private route : ActivatedRoute, private router: Router) { 

  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state){
        this.item = this.router.getCurrentNavigation()?.extras.state?.['item'];
      }
    })
    
  }
    
}
