import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersPageComponent } from '../../components/order/orders-page/orders-page.component';
import { OrderInfoComponent } from '../../components/order/order-info/order-info.component';
import { OrderCardComponent } from '../../components/order/order-card/order-card.component';

import { OrderRoutingModule } from './order-routing.module';
import { ShareModule } from 'src/app/shared/module/share/share.module';
import { RootOrderPageComponent } from './root-order-page/root-order-page.component';


@NgModule({
  declarations: [OrdersPageComponent, OrderInfoComponent, OrderCardComponent, RootOrderPageComponent],
  imports: [
    ShareModule,
    CommonModule,
    OrderRoutingModule
  ],
  exports:[OrdersPageComponent, OrderInfoComponent, OrderCardComponent]
})
export class OrderModule { }
