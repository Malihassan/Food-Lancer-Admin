import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootBuyerPageComponent } from './modules/buyer/root-buyer-page/root-buyer-page.component';
import { RootCategoryPageComponent } from './modules/category/root-category-page/root-category-page.component';
import { RootCoverageAreaPageComponent } from './modules/coverage-area/root-coverage-area-page/root-coverage-area-page.component';
import { RootOrderPageComponent } from './modules/order/root-order-page/root-order-page.component';
import { RootProductPageComponent } from './modules/product/root-product-page/root-product-page.component';
import { RootProfilePageComponent } from './modules/profile/root-profile-page/root-profile-page.component';
import { RootSellerPageComponent } from './modules/seller/root-seller-page/root-seller-page.component';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';
const routes: Routes = [
  // { path: "",component:AppComponent },
  { path: 'profile',component:RootProfilePageComponent},
  { path: 'buyer' ,component:RootBuyerPageComponent},
  { path: 'seller' ,component:RootSellerPageComponent},
  { path: 'category',component:RootCategoryPageComponent },
  { path: "product" ,component:RootProductPageComponent},
  { path: 'order' ,component:RootOrderPageComponent},
  { path: 'coverageArea' ,component:RootCoverageAreaPageComponent},
  { path: '**',component:NotFoundPageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
