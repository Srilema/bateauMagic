import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormsModule, Validator } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonItem, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton, IonGrid, IonRow, IonCol, IonList, IonInput, IonSelect, IonSelectOption } from "@ionic/angular/standalone";
import { HeaderComponent } from '../header/header.component';
import { PanierService } from 'src/app/Services/panier.service';
import { Product } from 'src/app/models/product.model';
import { Promotion } from '../models/promotion.model';
import { ItemsService } from 'src/app/Services/items.service';
import { Item } from 'src/app/models/item';



@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonItem,
    IonCard, IonCardContent, IonCardHeader, IonButton, IonGrid, IonRow, IonCol, IonCardTitle, IonList, IonInput, IonSelect, IonSelectOption]
})
export class PanierPage implements OnInit {
  list! : Product[];
  list2!:Item[];
  total! : number;
  tempTotal!:number;

  receivedProduct!:Product | Promotion ;
  receivedQuantity!:any;
  productPanier!: { product: any, quantity: number }[];
  panier!: any;
  constructor(private panierService: PanierService,private itemsService: ItemsService) {}
  deliveryChoice!:boolean;
  restaurants!:Item[];
  categorie="restaurants";
  formComp!:boolean;

  //variables pour commande et gestion de la forme
  name!:string;
  nickname!:string;
  resto!:string;
  test = true;


  ngOnInit() {
    this.loadPanier();
    this.deliveryChoice = false;
    this.formComp = false;
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

  chooseAdress(){
    if(this.deliveryChoice==true){
      this.deliveryChoice=false;
    }else{
      this.deliveryChoice=true
    }
  }

  loadCategories() {
    this.itemsService.getItemsList().subscribe({
      next: (response) => {
        console.log('Données récupérées:', response);
        this.list2 = response.list;
        console.log('List:', this.list);
        
        // Filtrer la liste selon la catégorie reçue
        this.restaurants= this.list2.filter(item => item.categorie === this.categorie);
        console.log('Catégorie filtrée:', this.restaurants);
      },
      error: (error) => {
        console.error('Erreur de chargement des données:', error);
      },
    });
  }

  finishCommand(){
    if(this.name ==null || this.nickname ==null || this.resto==null){
      console.error('Veuillez remplir les champs nécessaire');
      this.formComp=true;
    } else {
      console.log('Commande ')
      this.formComp=false;
    }
  }
 
}
