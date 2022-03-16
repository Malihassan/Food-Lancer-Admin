import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/account/home/home.component';
import { LoginFormComponent } from './components/account/login-form/login-form.component';
import { RegisterFormComponent } from './components/account/register-form/register-form.component';
import { RootAccountPageComponent } from './modules/account/root-account-page/root-account-page.component';
import { RootBuyerPageComponent } from './modules/buyer/root-buyer-page/root-buyer-page.component';
import { RootCategoryPageComponent } from './modules/category/root-category-page/root-category-page.component';
import { RootCoverageAreaPageComponent } from './modules/coverage-area/root-coverage-area-page/root-coverage-area-page.component';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { RootOrderPageComponent } from './modules/order/root-order-page/root-order-page.component';
import { RootProductPageComponent } from './modules/product/root-product-page/root-product-page.component';
import { RootProfilePageComponent } from './modules/profile/root-profile-page/root-profile-page.component';
import { RootSellerDetailsPageComponent } from './modules/seller/root-seller-details-page/root-seller-details-page.component';
import { RootSellerPageComponent } from './modules/seller/root-seller-page/root-seller-page.component';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';
import { ProductDetailesComponent } from './shared/components/product-detailes/product-detailes.component';
const routes: Routes = [
  { path: "",component:HomePageComponent },
  { path: 'account', component: RootAccountPageComponent, children:[
    {
      path: 'login',
      component: LoginFormComponent
    },
    {
      path: 'register',
      component: RegisterFormComponent
    }
  ]},
  { path: 'profile',component:RootProfilePageComponent},
  { path: 'buyer' ,children:[
    {path:'',component:RootBuyerPageComponent},
    {path:':id',component:RootBuyerPageComponent}
  ]},
  { path: 'seller' ,children:[
    {path:'',component:RootSellerPageComponent},
    {path:'details/:id',component:RootSellerDetailsPageComponent}
  ]},
  { path: 'category',component:RootCategoryPageComponent },
  { path: "product" ,children:[
    {path:'',component:RootProductPageComponent},
    {path:':id',component:ProductDetailesComponent}
  ]},
  { path: 'order' ,component:RootOrderPageComponent},
  { path: 'coverageArea' ,component:RootCoverageAreaPageComponent},
  { path: '**',component:NotFoundPageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //import { ProductDetailesComponent } from './shared/components/product-detailes/product-detailes.component';
exports: [RouterModule],
})
export class AppRoutingModule {}
