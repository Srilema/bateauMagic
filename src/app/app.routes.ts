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
  },  {
    path: 'product',
    loadComponent: () => import('./product/product/product.page').then( m => m.ProductPage)
  },
  {
    path: 'list-product',
    loadComponent: () => import('./list-product/list-product.page').then( m => m.ListProductPage)
  },

];
