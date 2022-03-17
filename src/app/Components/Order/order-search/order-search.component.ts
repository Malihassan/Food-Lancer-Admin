import { Order } from './../../../interfaces/order';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { OrderService } from '../../../services/order/order.service';

@Component({
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.scss'],
})
export class OrderSearchComponent implements OnInit {
  @Input() count = 0;
  @Input() page = 1;
  orders: Order[] = [];

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

  searchSubmit() {
    console.log(this.query, 'query');
    console.log(this.neutralizeQuery(this.query), 'noQQ');
    this.orderService
      .search(this.page, this.neutralizeQuery(this.query))
      .subscribe((res: any) => {
        console.log(res);
        console.log(res.docs, 'docs');

        this.orders = res.docs;
        this.count = res.totalPages;
        this.submitted.emit(this.orders);
      });
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

  ngOnInit(): void {}

  refreshPagination() {
    this.orderService
      .search(this.page, this.neutralizeQuery(this.query))
      .subscribe((res: any) => {
        this.orders = res.docs;
        this.pageCount.emit(this.page);
        this.submitted.emit(this.orders);
      });
  }
}
