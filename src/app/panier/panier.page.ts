import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonItem, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonGrid, IonRow, IonCol, IonList } from "@ionic/angular/standalone";
import { HeaderComponent } from '../header/header.component';
import { PanierService } from 'src/app/Services/panier.service';
import { Product } from 'src/app/models/product.model';
import { Promotion } from '../models/promotion.model';



@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonItem,
    IonCard, IonCardTitle, IonCol, IonList]
})
export class PanierPage implements OnInit {
  list! : Product[];
  total! : number;
  tempTotal!:number;
  receivedProduct!:Product | Promotion ;
  receivedQuantity!:any;
  productPanier!: { product: any, quantity: number }[];
  panier!: any;
  constructor(private panierService: PanierService) {
   }

  ngOnInit() {
    this.loadPanier();
  }

  loadPanier(){
   this.panier = this.panierService.getPanier().then(res=>{
    console.log('res',res);
    this.panier = res;
    console.log('panier',this.panier);
   },
    err=>{
      console.log('erreur pendant le chargement du panier ', err)
    }
  );

  }
  

  addTotal(){
    var tempTotal = 0;
    this.list.forEach(element => {
      var temp = element.quantity*element.price;
      tempTotal = tempTotal+temp;
    //  console.log(this.tempTotal)
    });
    this.total = tempTotal;
   // console.log(this.total)
  }

}
