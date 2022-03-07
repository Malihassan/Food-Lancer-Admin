import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerComponent } from '../../components/seller/sellerTable/seller.component';
import { SellerRoutingModule } from './seller-routing.module';
import { ShareModule } from 'src/app/shared/module/share/share.module';
import { RootSellerPageComponent } from './root-seller-page/root-seller-page.component';

@NgModule({
  declarations: [
    SellerComponent,
    RootSellerPageComponent,
  ],
  imports: [
    ShareModule,
    CommonModule,
    SellerRoutingModule,
  ],
  exports:[
    SellerComponent
  ]
})
export class SellerModule { }
