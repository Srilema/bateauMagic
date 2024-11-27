import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone:true,
  imports: [IonHeader, IonToolbar, IonTitle, IonButton, IonIcon],
  
})
export class HeaderComponent  implements OnInit {

  constructor(private router:Router) {
    addIcons({cartOutline})
   }

  ngOnInit() {}
  backHome(){
    this.router.navigate(['/']);
  }
  goToCart(){
    this.router.navigate(['/panier']);
  }

}
