import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrdersPageComponent } from '../../components/order/orders-page/orders-page.component';
import { OrderInfoComponent } from '../../components/order/order-info/order-info.component';

const routes: Routes = [
  { path: 'order', component: OrdersPageComponent },
  { path: 'order/info/:id', component: OrderInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
