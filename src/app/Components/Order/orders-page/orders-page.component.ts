import {
  Component,
  OnInit,
  Inject,
  EventEmitter,
  HostListener,
  ViewChild,
  Input,
  Output,
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
  ordersCount: number = 0;
  isEmpty: boolean = false;

  pageSize: number = 1;

  @Output() submitted = new EventEmitter<Order[]>();
  @Output() pageCount = new EventEmitter<number>();

  constructor(private orderService: OrderService) {}

  onQueryChange(e: any) {
    this.onSearch(e);
  }

  query = {
    maxPrice: null,
    minPrice: null,
    orderStatus: 0,
    id: null,
    buyerId: null,
    sellerId: null,
  };

  onSearch(query: any) {
    this.orderService.search(this.page, query).subscribe((res: any) => {
      this.orders = res.docs;
      this.orders.length === 0 ? (this.isEmpty = true) : (this.isEmpty = false);
      this.count = res.totalPages;
      this.ordersCount = res.totalDocs;
    });
  }

  scrollToTop() {
    this.div.nativeElement.scrollTop = 0;
  }

  onNewSearch(e: any) {
    this.orders = e;
    this.orders.length === 0 ? (this.isEmpty = true) : (this.isEmpty = false);
    if (this.count > 1 && this.orders.length === 6) {
      return;
    }
    this.ordersCount = this.orders.length;
  }
  onPageChange(e: any) {
    this.count = e;
  }

  ngOnInit(): void {
    this.onSearch({});
  }

  neutralizeQuery(query: any) {
    let newQuery: any = {};
    query.orderStatus == 0
      ? newQuery
      : (newQuery.orderStatus = query.orderStatus);

    query.maxPrice == null ? newQuery : (newQuery.maxPrice = query.maxPrice);

    query.minPrice == null ? newQuery : (newQuery.minPrice = query.minPrice);
    query.id == null ? newQuery : (newQuery.id = query.id);
    query.buyerId == null ? newQuery : (newQuery.buyerId = query.buyerId);
    query.sellerId == null ? newQuery : (newQuery.sellerId = query.sellerId);

    return newQuery;
  }

  refreshPagination() {
    this.orderService
      .search(this.page, this.neutralizeQuery(this.query))
      .subscribe((res: any) => {
        this.orders = res.docs;
        this.orders.length === 0
          ? (this.isEmpty = true)
          : (this.isEmpty = false);

        this.pageCount.emit(this.page);
        this.submitted.emit(this.orders);
      });
  }
}
