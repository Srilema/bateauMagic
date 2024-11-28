import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonItem, IonInput, IonLabel, IonButtons, IonTitle, IonToolbar, IonHeader, IonModal, IonRow, IonCol } from "@ionic/angular/standalone";
import { Product } from '../models/product.model';

@Component({
  selector: 'app-card-button-quantity',
  templateUrl: './card-button-quantity.component.html',
  styleUrls: ['./card-button-quantity.component.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonModal, IonLabel, IonInput, IonItem, IonButton,IonContent,CommonModule,FormsModule],
  providers: [ModalController],
})
export class CardButtonQuantityComponent  implements OnInit {
  quantity!: string;
  @Output() quantitySubmitted = new EventEmitter<number>();
  isModalOpen = false;

  constructor() {}
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
    
      console.log(this.quantity)
      this.closeModal();
    
  }
}
