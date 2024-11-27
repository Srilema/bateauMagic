import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonItem, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonGrid, IonRow, IonCol, IonList } from "@ionic/angular/standalone";
import { HeaderComponent } from '../header/header.component';
import { PanierService } from 'src/app/Services/panier.service';
import { Product } from 'src/app/models/product.model';



@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonItem,
    IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonGrid, IonRow, IonCol, IonList]
})
export class PanierPage implements OnInit {
  list! : Product[];
  total! : number;
  tempTotal!:number;

  constructor(private panierService: PanierService) {
   }

  ngOnInit() {
    this.loadPanier();
  }

  loadPanier(){
    this.panierService.getPanier().subscribe({
      next: (response) => {
        console.log("data retrieved ", response);
        this.list = response.products;
        console.log("list: ",this.list);
        this.addTotal();
      },      
      error: (error) => {
        console.error('Erreur de chargement des données:', error);
      },
    })
  }

  addTotal(){
    var tempTotal = 0;
    this.list.forEach(element => {
      var temp = element.quantity*element.price;
      tempTotal = tempTotal+temp;
      console.log(this.tempTotal)
    });
    this.total = tempTotal;
    console.log(this.total)
  }

}
