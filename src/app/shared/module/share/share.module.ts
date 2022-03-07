import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductDetailesComponent } from '../../components/product-detailes/product-detailes.component';
import { FooterComponent } from '../../components/footer/footer.component';

import { TableComponent } from '../../components/table/table.component';
import { ShareRoutingModule } from './share-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NavBarComponent,
    TableComponent,
    ProductCardComponent,
    ProductDetailesComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ShareRoutingModule
  ],
  exports:[
    NavBarComponent,
    TableComponent,
    ProductCardComponent,
    ProductDetailesComponent,
    FooterComponent
  ]
})
export class ShareModule { }
