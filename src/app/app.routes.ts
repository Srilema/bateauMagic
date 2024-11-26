import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'description',
    loadComponent: () => import('./description/description.page').then( m => m.DescriptionPage)
  },
  {
    path: 'item-description',
    loadComponent: () => import('./item-description/item-description.page').then( m => m.ItemDescriptionPage)
  },

];
