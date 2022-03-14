import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { RootAccountPageComponent } from './root-account-page/root-account-page.component';
import { HomeComponent } from 'src/app/components/account/home/home.component';
import { LoginFormComponent } from 'src/app/components/account/login-form/login-form.component';
import { RegisterFormComponent } from 'src/app/components/account/register-form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RootAccountPageComponent,
    HomeComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
  ,exports:[
    LoginFormComponent,
    RegisterFormComponent
  ]
})
export class AccountModule { }
