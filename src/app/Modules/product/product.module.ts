import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../../components/product/product-list/product-list.component';
import { CategoryListComponent } from '../../components/category/category-list/category-list.component';

import { ProductRoutingModule } from './product-routing.module';
import { ShareModule } from 'src/app/shared/module/share/share.module';
import { RootProductPageComponent } from './root-product-page/root-product-page.component';


@NgModule({
  declarations: [ProductListComponent, RootProductPageComponent,CategoryListComponent],
  imports: [
    ShareModule,
    CommonModule,
    ProductRoutingModule
  ],
  exports:[ProductListComponent] 
})
export class ProductModule { }
