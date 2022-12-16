import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharityComponent } from './core/charity/charity.component';
import { FaqComponent } from './core/faq/faq.component';
import { HomeComponent } from './core/home/home.component'
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component'

export const routes: Routes = [

   {
      path: '',
      component: HomeComponent
   },
   {
      path: 'charity',
      component: CharityComponent
   },
   {
      path: 'meeting',
      loadChildren: () => import('./meetings/meetings.module').then(m => m.MeetingsModule)
   },
   {
      path: 'auth',
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
   },
   {
      path: 'FAQ',
      component: FaqComponent
   },
   {
      path: '**',
      component: PageNotFoundComponent
   }
   // {
   //    path: 'profile',
   //    component: CharityComponent
   // },


];
// export const AppRoutingModule =RouterModule.forRoot(routes)
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
