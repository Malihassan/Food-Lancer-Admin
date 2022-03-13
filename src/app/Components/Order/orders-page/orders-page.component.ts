import {
  Component,
  OnInit,
  Inject,
  HostListener,
  ViewChild,
} from '@angular/core';
// import { DOCUMENT } from '@angular/common';

import { OrderService } from '../../../services/order/order.service';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss'],
})
export class OrdersPageComponent implements OnInit {
  @ViewChild('ordersPage') div: any;
  ngAfterViewInit() {
    console.log(this.div.nativeElement);
  }

  orders: any = 0;

  constructor(private orderService: OrderService) {}

  onSearch(query: any) {
    this.orderService.search(query).subscribe((res: any) => {
      this.orders = res;
    });
  }

  scrollToTop() {
    this.div.nativeElement.scrollTop = 0;
  }

  ngOnInit(): void {
    this.onSearch({ minPrice: 10 });
  }
}
