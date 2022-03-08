import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { RootCategoryPageComponent } from './root-category-page/root-category-page.component';


@NgModule({
  declarations: [
    RootCategoryPageComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
