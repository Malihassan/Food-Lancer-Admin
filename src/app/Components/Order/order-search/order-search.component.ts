import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { OrderService } from '../../../services/order/order.service';

@Component({
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.scss'],
})
export class OrderSearchComponent implements OnInit {
  // @Output() orders: any = this.orderService.orders;

  @Input() count = 0;
  orders: any = [];

  page: number = 1;
  pageSize: number = 1;

  @Output() submitted = new EventEmitter<string>();

  constructor(private orderService: OrderService) {}

  query = {
    maxPrice: 0,
    minPrice: 0,
    orderStatus: 0,
  };

  searchSubmit() {
    console.log(this.neutralizeQuery(this.query));

    this.orderService
      .search(this.neutralizeQuery(this.query))
      .subscribe((res: any) => {
        console.log(res.data);
        this.orders = res.data;
        this.count = res.countOfOrders;
        this.submitted.emit(this.orders);
      });
  }

  neutralizeQuery(query: any) {
    let newQuery: any = {};
    query.orderStatus === 0 ? '' : (newQuery.orderStatus = query.orderStatus);

    query.maxPrice === 0 ? '' : (newQuery.maxPrice = query.maxPrice);

    query.minPrice === 0 ? '' : (newQuery.minPrice = query.minPrice);

    return newQuery;
  }

  ngOnInit(): void {}

  refreshPagination() {
    this.orderService.search({ page: this.page }).subscribe((res: any) => {
      console.log(this.page);
      console.log(res);
      this.orders = res.data;

      this.submitted.emit(this.orders);
    });
  }
}
