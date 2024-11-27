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
    path: 'item-list/:categorie',
    loadComponent: () => import('./item-list/item-list.page').then( m => m.ItemListPage)
  },
  {
    path: 'description',
    loadComponent: () => import('./description/description.page').then( m => m.DescriptionPage)
  },

];
