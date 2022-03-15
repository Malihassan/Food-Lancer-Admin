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
  page: number = 1;
  orders: Order[] = [];
  count: number = 0;

  constructor(private orderService: OrderService) {}

  onSearch(query: any) {
    this.orderService.search(this.page, query).subscribe((res: any) => {
      this.orders = res.docs;
      this.count = res.totalPages;
      console.log(res);
      console.log('data', this.orders);
    });
  }

  scrollToTop() {
    this.div.nativeElement.scrollTop = 0;
  }

  onNewSearch(e: any) {
    this.orders = e;
  }
  onPageChange(e: any) {
    this.page = e;
  }

  ngOnInit(): void {
    this.onSearch({});
  }
}
