import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  constructor(private http: HttpClient) { }

  getBuyerList(pageNum: number,query:any={}) {
    return this.http.get(`http://localhost:3000/admin/buyer/allBuyers?page=${pageNum}`, {
      params: { ...query },
      headers: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Ik5ld0FkbWluMi0xIiwiaWQiOiI2MjEyOGM1NzU1ZmM1ODE1MjMwYjg5NDYiLCJpYXQiOjE2NDY4NTI1MDksImV4cCI6MTY0NjkzODkwOX0.oVDmEnuN1hzFQNCD38-ounOkymdQSdQTWPugIjEib4s',
      },
    })
  }

}
