import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonItem, IonInput, IonLabel, IonButtons, IonTitle, IonToolbar, IonHeader, IonModal, IonRow, IonCol } from "@ionic/angular/standalone";
import { Product } from '../models/product.model';
import { PanierService } from '../Services/panier.service';
import { Promotion } from '../models/promotion.model';

@Component({
  selector: 'app-card-button-quantity',
  templateUrl: './card-button-quantity.component.html',
  styleUrls: ['./card-button-quantity.component.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonModal, IonLabel, IonInput, IonItem, IonButton,IonContent,CommonModule,FormsModule],
  providers: [ModalController],
})
export class CardButtonQuantityComponent  implements OnInit {
  quantity!: any;
  @Output() quantitySubmitted = new EventEmitter<number>();
  isModalOpen = false;
  product!: any;
  productPanier!:any;

  
  constructor(private panierService: PanierService) {}
ngOnInit(): void {
  
}
  // Ouvrir le modal
  openModal() {
    this.isModalOpen = true;
  }

  // Fermer le modal
  closeModal() {
    this.isModalOpen = false;
  }

  // Gérer la fermeture du modal
  onModalDismiss() {
    console.log('Modal fermé');
    // Vous pouvez ici nettoyer ou réinitialiser certaines valeurs si nécessaire
  }
  envoiData(){
      
      this.product = this.panierService.getSelectedProduct();
      this.productPanier= {product:this.product,quantity:this.quantity}
      this.panierService.savePanier(this.productPanier);
      console.log(this.quantity);
      this.quantity = ""
      this.closeModal();
      
  }
}
