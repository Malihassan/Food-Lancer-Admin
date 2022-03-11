import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seller } from 'src/app/interfaces/seller';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  constructor(private http: HttpClient) {}

  getSellersList(pageNum: number,query:any) {
    return this.http.get(
      `http://localhost:3000/admin/seller/allSellers?page=${pageNum}`,
      {
        params:{...query},
        headers: {
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Ik5ld0FkbWluMi0xIiwiaWQiOiI2MjEyOGM1NzU1ZmM1ODE1MjMwYjg5NDYiLCJpYXQiOjE2NDY5MzkzNzcsImV4cCI6MTY0NzAyNTc3N30.rVY8T88moEIzzksVzmPbJpgrHTmUQppJyKuXhCczCUU',
        },
      }
    );
  }
}
