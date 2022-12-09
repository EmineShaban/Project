import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharityComponent } from './core/charity/charity.component';
import { HomeComponent } from './core/home/home.component'
import { AllMeetingsComponent } from './core/meetings/all-meetings/all-meetings.component';
import { CreateComponent } from './core/meetings/create/create.component'
import { LoginComponent } from './core/auth/login/login.component'
import { RegisterComponent } from './core/auth/register/register.component'
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
      loadChildren: () => import('./core/meetings/meetings.module').then(m => m.MeetingsModule)
   },
   {
      path: 'create',
      component: CreateComponent
   },
   {
      path: '',
      loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule)
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
