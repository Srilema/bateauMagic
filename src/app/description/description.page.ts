import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonIcon, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { Item } from '../models/item';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
  standalone: true,
  imports: [IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton]
})
export class DescriptionPage implements OnInit {
  Title: string = "Restaurant de l'hotel";
  Description: string = "Description du restaurant";
  photoUrl: string = "..\assets\photos\restaurant\photo.jpeg";
  isProduit: boolean = false;
  constructor(private route : ActivatedRoute, private router: Router) { 

  }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { item: any };

    if (state?.item) {
      this.Title = state.item.title;
      this.Description = state.item.description;
      this.photoUrl = state.item.photo;
    }
  }

  onLoadPanier(){

  }
    
}
