import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductDetailesComponent } from '../../components/product-detailes/product-detailes.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { TableComponent } from '../../components/table/table.component';
import { ShareRoutingModule } from './share-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    NavBarComponent,
    TableComponent,
    ProductCardComponent,
    ProductDetailesComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ShareRoutingModule,
    NgxSpinnerModule
  ],
  exports:[
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NavBarComponent,
    TableComponent,
    ProductCardComponent,
    ProductDetailesComponent,
    FooterComponent,
    NgbModule,
    LoaderComponent
  ]
})
export class ShareModule { }
