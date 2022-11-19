import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharityComponent } from './core/charity/charity.component';
import {HomeComponent} from './core/home/home.component'
export const routes: Routes = [
  
   {
    path: 'home',
    component: HomeComponent
   },
   {
    path: 'charity',
    component: CharityComponent
   }

  
];
// export const AppRoutingModule =RouterModule.forRoot(routes)
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
