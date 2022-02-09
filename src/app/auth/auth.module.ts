import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
  ]
})
export class AuthModule { }
