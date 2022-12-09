import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms'

@NgModule({
  declarations: [
    // RegisterComponent,
    // LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    // REACTIVE_FORM_DIRECTIVES
  ],
  exports: [
    // LoginComponent,
    // RegisterComponent
  ]
})
export class AuthModule { }
