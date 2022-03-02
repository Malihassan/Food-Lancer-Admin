import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellerComponent } from './pages/seller/seller.component';
import { ProductsComponent } from './pages/products/products.component';
import { TableComponent } from './shared/components/table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilterTablePipe } from './shared/pipes/search-filter-table.pipe';
import { NavBarComponent } from './shared/components/table/nav-bar/nav-bar.component';
import {HttpClientModule } from '@angular/common/http'
import { SellerService } from './services/seller/seller.service';
import { BuyerComponent } from './pages/buyer/buyerTable/buyer.component';
import { FilerBuyerComponent } from './pages/buyer/filer-buyer/filer-buyer.component';
@NgModule({
  declarations: [
    AppComponent,
    SellerComponent,
    ProductsComponent,
    TableComponent,
    SearchFilterTablePipe,
    NavBarComponent,
    BuyerComponent,
    FilerBuyerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [SellerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
