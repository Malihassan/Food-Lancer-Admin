import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerRoutingModule } from './seller-routing.module';
import { ShareModule } from 'src/app/shared/module/share/share.module';
import { RootSellerPageComponent } from './root-seller-page/root-seller-page.component';
import { FilterSellerComponent } from 'src/app/components/seller/filter-seller/filter-seller.component';

@NgModule({
  declarations: [
    RootSellerPageComponent,
    FilterSellerComponent
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
