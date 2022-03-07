import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { OrdersPageComponent } from './components/order/orders-page/orders-page.component';
import { OrderInfoComponent } from './components/order/order-info/order-info.component';
import { OrderCardComponent } from './components/order/order-card/order-card.component';
import { FilerBuyerComponent } from './components/buyer/filer-buyer/filer-buyer.component';
import { BuyerComponent } from './components/buyer/buyerTable/buyer.component';
import { TableComponent } from './shared/components/table/table.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductDetailesComponent } from './shared/components/product-detailes/product-detailes.component';
import { FooterComponent } from './shared/components/footer/footer.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilterTablePipe } from './shared/pipes/search-filter-table.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SellerService } from './services/seller/seller.service';
import { SellerComponent } from './components/seller/sellerTable/seller.component';
@NgModule({
  declarations: [
    AppComponent,
    BuyerComponent,
    SellerComponent,
    TableComponent,
    ProductCardComponent,
    ProductListComponent,
    ProductDetailesComponent,
    SearchFilterTablePipe,
    NavBarComponent,
    NavBarComponent,
    OrderCardComponent,
    OrderInfoComponent,
    OrdersPageComponent,
    FooterComponent,
    FilerBuyerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [SellerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
