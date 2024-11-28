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
    path: 'panier',
    loadComponent: () => import('./panier/panier.page').then( m => m.PanierPage)
  },
  {
    path: 'description',
    loadComponent: () => import('./description/description.page').then( m => m.DescriptionPage)
  },

  {
    path: 'product',
    loadComponent: () => import('./product/product/product.page').then( m => m.ProductPage)
  },
  {
    path: 'list-product',
    loadComponent: () => import('./list-product/list-product.page').then( m => m.ListProductPage)
  },

];
