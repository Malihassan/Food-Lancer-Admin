/* import { FilerBuyerComponent } from './Components/Buyer/filer-buyer/filer-buyer.component';
import { BuyerComponent } from './Components/Buyer/buyerTable/buyer.component';
import { OrdersPageComponent } from './Components/Order/orders-page/orders-page.component';
import { OrderInfoComponent } from './Components/Order/order-info/order-info.component';
import { OrderCardComponent } from './Components/Order/order-card/order-card.component'; */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* import { SellerComponent } from './Components/Seller/sellerTable/seller.component';\
import { ProductsComponent } from './Components/Product/products/products.component'; */
//import { TableComponent } from './shared/components/table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { ProductListComponent } from './components/Product/product-list/product-list.component';
import { ProductDetailesComponent } from './shared/components/product-detailes/product-detailes.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';

//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { SearchFilterTablePipe } from './shared/pipes/search-filter-table.pipe';
import {HttpClientModule } from '@angular/common/http'
import { SellerService } from './services/seller/seller.service';
@NgModule({
  declarations: [
 /*    AppComponent,
    SellerComponent,
    ProductsComponent,
    TableComponent, */
    NavBarComponent,
    ProductCardComponent,
    ProductListComponent,
    ProductDetailesComponent
   /*  SearchFilterTablePipe,

    NavBarComponent,
    OrderCardComponent,
    OrderInfoComponent,
    OrdersPageComponent,
    BuyerComponent,
    FilerBuyerComponent */

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    /* FormsModule,
    ReactiveFormsModule, */
    HttpClientModule
  ],
  providers: [SellerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
