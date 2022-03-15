import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerRoutingModule } from './seller-routing.module';
import { ShareModule } from 'src/app/shared/module/share/share.module';
import { RootSellerPageComponent } from './root-seller-page/root-seller-page.component';
import { FilterSellerComponent } from 'src/app/components/seller/filter-seller/filter-seller.component';
import { RootSellerDetailsPageComponent } from './root-seller-details-page/root-seller-details-page.component';
import { SellerDetailsComponent } from 'src/app/components/seller/seller-details/seller-details.component';
import { SellerProductsListComponent } from 'src/app/components/seller/seller-products-list/seller-products-list.component';
import { SellerProductsCardComponent } from 'src/app/components/seller/seller-products-card/seller-products-card.component';
import { SellerOrdersListComponent } from 'src/app/components/seller/seller-orders-list/seller-orders-list.component';
import { SellerOrdersCardComponent } from 'src/app/components/seller/seller-orders-card/seller-orders-card.component';

@NgModule({
  declarations: [
    RootSellerPageComponent,
    FilterSellerComponent,
    RootSellerDetailsPageComponent,
    SellerDetailsComponent,
    SellerProductsListComponent,
    SellerProductsCardComponent,
    SellerOrdersListComponent,
    SellerOrdersCardComponent
  ],
  imports: [
    ShareModule,
    CommonModule,
    SellerRoutingModule,
  ],
  exports:[
  ]
})
export class SellerModule { }
