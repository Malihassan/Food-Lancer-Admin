import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/account/home/home.component';
import { LoginFormComponent } from 'src/app/components/account/login-form/login-form.component';
import { RegisterFormComponent } from 'src/app/components/account/register-form/register-form.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginFormComponent
  },
  {
    path: "register",
    component: RegisterFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
