import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seller } from 'src/app/interfaces/seller';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  constructor(private http: HttpClient) {}

  getAllUsersList() {
    return this.http.get('http://localhost:8888/admin/seller/allSellers', {
      headers: {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Ik5ld0FkbWluMi0xIiwiaWQiOiI2MjEyOGM1NzU1ZmM1ODE1MjMwYjg5NDYiLCJpYXQiOjE2NDYwOTA5MjcsImV4cCI6MTY0NjE3NzMyN30.75Areh9SWJlfwdZl46pJdYKhvgPiyhX-jUummCdom1U',
      },
    });
  }
}
