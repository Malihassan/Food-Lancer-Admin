import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  search(query: object) {
    return this.http.get(
      'https://foodlancer.herokuapp.com/admin/order/orders',
      {
        params: {
          ...query,
        },
      }
    );
  }
}
