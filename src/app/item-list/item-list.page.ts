import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { Item } from '../models/item';
import { ItemsService } from '../Services/items.service';
import { CardListComponent } from '../component/card-list/card-list.component';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../header/header.component";


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.page.html',
  styleUrls: ['./item-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CardListComponent, HeaderComponent]
})
export class ItemListPage implements OnInit {
categorie!: string;
nameCategorie!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categorie = params['categorie'];
      console.log('categorie :',this.categorie);
      if(this.categorie == 'bateaux'){
        this.nameCategorie = 'Nos Partenaires Bateaux';
      }if (this.categorie == 'restaurants') {
        this.nameCategorie = 'Nos Partenaires Restaurants';
      }if (this.categorie == 'recettes'){
        this.nameCategorie = 'Nos Recettes';
      }
    });
  }
}
