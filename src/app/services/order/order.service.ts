import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  // orders: any = new BehaviorSubject([]);

  // updateOrders(arr: []) {
  //   this.orders.next(arr);
  // }

  // getOrders() {
  //   return this.orders;
  // }

  search(query: any) {
    const page = query.page;
    return this.http.get(`http://localhost:8888/admin/order/orders?${page}`, {
      params: {
        ...query,
      },
    });
  }
}
