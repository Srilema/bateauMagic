import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-item-description',
  templateUrl: './item-description.page.html',
  styleUrls: ['./item-description.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ItemDescriptionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
