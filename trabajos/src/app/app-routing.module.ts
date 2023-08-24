import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { FibonaciPage } from './fibonaci/fibonaci.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'fibonaci',
    loadChildren: () => import('./fibonaci/fibonaci.module').then((m) => m.FibonacciPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
