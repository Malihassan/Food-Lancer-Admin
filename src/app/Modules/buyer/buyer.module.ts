import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilerBuyerComponent } from '../../components/buyer/filer-buyer/filer-buyer.component';
import { BuyerRoutingModule } from './buyer-routing.module';
import { ShareModule } from 'src/app/shared/module/share/share.module';
import { RootBuyerPageComponent } from './root-buyer-page/root-buyer-page.component';
import { BuyerDetailsComponent } from './buyer-details/buyer-details.component';


@NgModule({
  declarations: [FilerBuyerComponent, RootBuyerPageComponent, BuyerDetailsComponent],
  imports: [
    ShareModule,
    CommonModule,
    BuyerRoutingModule
  ],
  exports: [FilerBuyerComponent]
})
export class BuyerModule { }
