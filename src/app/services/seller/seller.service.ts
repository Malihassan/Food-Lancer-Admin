import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seller } from 'src/app/interfaces/seller';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  constructor(private http: HttpClient) {}

  getSellersList(pageNum: number) {
    return this.http.get(
      `http://localhost:3000/admin/seller/allSellers?page=${pageNum}`,
      {
        headers: {
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Ik5ld0FkbWluMi0xIiwiaWQiOiI2MjEyOGM1NzU1ZmM1ODE1MjMwYjg5NDYiLCJpYXQiOjE2NDYyNDU3NDIsImV4cCI6MTY0NjMzMjE0Mn0.YjT3XuTkkHHeUfhVZt96nqTCASJP3u_jGma0ZY8U0Mo',
        },
      }
    );
  }
}