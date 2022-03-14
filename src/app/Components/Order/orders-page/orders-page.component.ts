import {
  Component,
  OnInit,
  Inject,
  HostListener,
  ViewChild,
} from '@angular/core';
// import { DOCUMENT } from '@angular/common';

import { Order } from '../../../interfaces/order';
import { OrderService } from '../../../services/order/order.service';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss'],
})
export class OrdersPageComponent implements OnInit {
  @ViewChild('ordersPage') div: any;
  ngAfterViewInit() {}

  orders: Order[] = [];
  count: number = 0;

  constructor(private orderService: OrderService) {}

  onSearch(query: any) {
    this.orderService.search(query).subscribe((res: any) => {
      this.orders = res.data;
      this.count = res.countOfOrders;
    });
  }

  scrollToTop() {
    this.div.nativeElement.scrollTop = 0;
  }

  onNewSearch(e: any) {
    // console.log(e, "it's me");
    this.orders = e;
  }

  ngOnInit(): void {
    this.onSearch({});
  }
}
