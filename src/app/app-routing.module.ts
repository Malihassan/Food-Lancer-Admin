import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/Product/product-list/product-list.component';
import { ProductDetailesComponent } from './shared/components/product-detailes/product-detailes.component';
const routes: Routes = [
  {path:"allProducts",component: ProductListComponent},
  {path:":id", component:ProductDetailesComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
