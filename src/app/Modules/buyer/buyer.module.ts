import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerComponent } from '../../components/buyer/buyerTable/buyer.component';
import { FilerBuyerComponent } from '../../components/buyer/filer-buyer/filer-buyer.component';
import { BuyerRoutingModule } from './buyer-routing.module';
import { ShareModule } from 'src/app/shared/module/share/share.module';
import { RootBuyerPageComponent } from './root-buyer-page/root-buyer-page.component';


@NgModule({
  declarations: [BuyerComponent,FilerBuyerComponent, RootBuyerPageComponent],
  imports: [
    ShareModule,
    CommonModule,
    BuyerRoutingModule
  ],
  exports:[BuyerComponent,FilerBuyerComponent]
})
export class BuyerModule { }
