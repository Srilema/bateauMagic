import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonGrid, IonRow, IonCol, IonList } from "@ionic/angular/standalone";
import { ItemsService } from 'src/app/Services/items.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  standalone: true,
  imports: [IonList, IonCol, IonRow, IonGrid, IonButton, IonCardSubtitle, IonCardTitle, IonCardHeader, CommonModule, IonCard, IonCardContent]
})
export class CardListComponent implements OnInit {
  list!: Item[];
  categorie!: string; // Variable pour stocker la catégorie
  selectedCategory: any;

  constructor(private router: Router, private itemsService: ItemsService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Récupérer le paramètre 'categorie' à partir de l'URL
    this.route.params.subscribe(params => {
      this.categorie = params['categorie']; // Récupère 'categorie' depuis l'URL
      console.log('Catégorie reçue:', this.categorie);
      
      // Utiliser 'categorie' pour filtrer ou charger les éléments
      this.loadCategories();
    });
  }

  selectCategory(categorie: string) {
    this.selectedCategory = this.list.filter(category => category.categorie === categorie);
    console.log('Catégorie sélectionnée:', this.selectedCategory);
  }

  loadCategories() {
    this.itemsService.getItemsList().subscribe({
      next: (response) => {
        console.log('Données récupérées:', response);
        this.list = response.list;
        console.log('List:', this.list);
        
        // Filtrer la liste selon la catégorie reçue
        this.selectedCategory = this.list.filter(item => item.categorie === this.categorie);
        console.log('Catégorie filtrée:', this.selectedCategory);
      },
      error: (error) => {
        console.error('Erreur de chargement des données:', error);
      },
    });
  }
  loadDescription(item: Item){
    let navigationExtras: NavigationExtras = {
      state: {item: item}
    }
    this.router.navigate(['/description'], navigationExtras)
  }
}
