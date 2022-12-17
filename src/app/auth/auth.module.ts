import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EmailValidatorDirective } from './email-validator.directive';

@NgModule({
  declarations: [
    LoginComponent,
  RegisterComponent,
    ProfileComponent,
    EmailValidatorDirective,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    ],
  exports: [

  ]
})
export class AuthModule { }
