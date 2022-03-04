import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellerComponent } from './pages/seller/seller.component';
import { ProductsComponent } from './pages/products/products.component';
import { TableComponent } from './shared/components/table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilterTablePipe } from './shared/pipes/search-filter-table.pipe';
import {HttpClientModule } from '@angular/common/http'
import { SellerService } from './services/seller/seller.service';
<<<<<<< HEAD
import { OrdersPageComponent } from './pages/orders/orders-page/orders-page.component';
import { OrderCardComponent } from './pages/orders/order-card/order-card.component';
import { OrderInfoComponent } from './pages/orders/order-info/order-info.component';
import { FooterComponent } from './shared/components/footer/footer.component';
||||||| 6cc46dc
=======
import { BuyerComponent } from './pages/buyer/buyerTable/buyer.component';
import { FilerBuyerComponent } from './pages/buyer/filer-buyer/filer-buyer.component';
>>>>>>> 58e024711dcc6d6e399026e2491c7cb9c47db216
@NgModule({
  declarations: [
    AppComponent,
    SellerComponent,
    ProductsComponent,
    TableComponent,
    SearchFilterTablePipe,
<<<<<<< HEAD
    NavBarComponent,
    OrdersPageComponent,
    OrderCardComponent,
    OrderInfoComponent,
    FooterComponent
||||||| 6cc46dc
    NavBarComponent
=======
    NavBarComponent,
    BuyerComponent,
    FilerBuyerComponent
>>>>>>> 58e024711dcc6d6e399026e2491c7cb9c47db216
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
