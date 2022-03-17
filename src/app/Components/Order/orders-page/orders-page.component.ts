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
  // countOfSellers:0

  pageSize: number = 1;

  @Output() submitted = new EventEmitter<Order[]>();
  @Output() pageCount = new EventEmitter<number>();

  constructor(private orderService: OrderService) {}

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
      // this.countOfSellers = res.totalDocs
      // this.limit = res.limit
      this.count = res.totalPages;
      console.log(res);
      
    });
  }

  scrollToTop() {
    this.div.nativeElement.scrollTop = 0;
  }

  onNewSearch(e: any) {
    this.orders = e;
    console.log(this.orders);
  }
  onPageChange(e: any) {
    this.count = e;
    console.log(this.count, 'here count');
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
        console.log(this.page);
        console.log(this.neutralizeQuery(this.query));
        console.log(res, 'res');
        this.orders = res.docs;
        console.log('docs', this.orders);
        this.pageCount.emit(this.page);
        this.submitted.emit(this.orders);
      });
  }
}
