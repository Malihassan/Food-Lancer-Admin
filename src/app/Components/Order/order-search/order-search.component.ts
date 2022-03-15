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
  orders: Order[] = [];

  page: number = 1;
  pageSize: number = 1;

  @Output() submitted = new EventEmitter<Order[]>();
  @Output() pageCount = new EventEmitter<number>();

  constructor(private orderService: OrderService) {}

  query = {
    maxPrice: 0,
    minPrice: 0,
    orderStatus: 0,
    id: 0,
    buyerId: 0,
    sellerId: 0,
  };

  searchSubmit() {
    this.orderService
      .search(this.page, this.neutralizeQuery(this.query))
      .subscribe((res: any) => {
        console.log(res);
        console.log(res.docs, 'docs');
        this.orders = res.data;
        this.count = res.totalPages;
        this.submitted.emit(this.orders);
      });
  }

  neutralizeQuery(query: any) {
    let newQuery: any = {};
    query.orderStatus == (0 || null)
      ? ''
      : (newQuery.orderStatus = query.orderStatus);

    query.maxPrice == 0 ? '' : (newQuery.maxPrice = query.maxPrice);

    query.minPrice == 0 ? '' : (newQuery.minPrice = query.minPrice);
    query.id == 0 ? '' : (newQuery.id = query.id);
    query.buyerId == 0 ? '' : (newQuery.buyerId = query.buyerId);
    query.sellerId == 0 ? '' : (newQuery.sellerId = query.sellerId);

    return newQuery;
  }

  ngOnInit(): void {}

  refreshPagination() {
    this.orderService
      .search(this.page, this.neutralizeQuery(this.query))
      .subscribe((res: any) => {
        this.orders = res.docs;
        console.log('data', this.orders);
        this.pageCount.emit(this.page);
        this.submitted.emit(this.orders);
      });
  }
}
