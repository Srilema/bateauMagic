import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { Item } from '../models/item';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent]
})
export class DescriptionPage implements OnInit {
  Title: string = "Restaurant de l'hotel";
  Description: string = "Description du restaurant";
  photoUrl: string = "C:\Users\Sofia\source\repos\bateauMagic\src\assets\photos\restaurant\images.jpeg";
  categorie: string = "restaurant"
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
    
}
