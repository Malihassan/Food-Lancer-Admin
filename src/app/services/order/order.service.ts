import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  search(page:number,query: any) {
    return this.http.get(`http://localhost:3000/admin/order/orders?page=${page}`, {
      params: {
        ...query,
      },
    });
  }
}
