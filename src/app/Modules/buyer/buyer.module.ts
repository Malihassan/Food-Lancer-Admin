import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilerBuyerComponent } from '../../components/buyer/filer-buyer/filer-buyer.component';
import { BuyerRoutingModule } from './buyer-routing.module';
import { ShareModule } from 'src/app/shared/module/share/share.module';
import { RootBuyerPageComponent } from './root-buyer-page/root-buyer-page.component';
import { BuyerDetailsComponent } from './buyer-details/buyer-details.component';
import { BuyerInfoComponent } from 'src/app/components/buyer/buyer-info/buyer-info.component';


@NgModule({
  declarations: [FilerBuyerComponent, RootBuyerPageComponent, BuyerDetailsComponent, BuyerInfoComponent],
  imports: [
    ShareModule,
    CommonModule,
    BuyerRoutingModule
  ],
  exports: [FilerBuyerComponent, BuyerInfoComponent]
})
export class BuyerModule { }
