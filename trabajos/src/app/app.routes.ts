import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

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
    path: 'fibonaci',
    loadComponent: () => import('./fibonaci/fibonaci.page').then( m => m.FibonaciPage)
  },
];
