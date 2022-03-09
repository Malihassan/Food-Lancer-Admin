import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoverageAreaService {

  constructor(private http :HttpClient) { }
  getCoverageAreaList(pageNum:number){
    return this.http.get(`http://localhost:3000/coverageArea?page=${pageNum}`,{
      headers:{
        // token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Ik5ld0FkbWluMi0xIiwiaWQiOiI2MjEyOGM1NzU1ZmM1ODE1MjMwYjg5NDYiLCJpYXQiOjE2NDYyNDU3NDIsImV4cCI6MTY0NjMzMjE0Mn0.YjT3XuTkkHHeUfhVZt96nqTCASJP3u_jGma0ZY8U0Mo',
      },
    })
  }
  insertCoverageAreaList(data:any){
    console.log("Service Insert");
    return this.http.post(`http://localhost:3000/coverageArea`,data,{
      headers:{
        // token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Ik5ld0FkbWluMi0xIiwiaWQiOiI2MjEyOGM1NzU1ZmM1ODE1MjMwYjg5NDYiLCJpYXQiOjE2NDYyNDU3NDIsImV4cCI6MTY0NjMzMjE0Mn0.YjT3XuTkkHHeUfhVZt96nqTCASJP3u_jGma0ZY8U0Mo',
      },
    })
  }
  deleteCoverageArea(id:any){
    return this.http.delete(`http://localhost:3000/coverageArea/${id}`,{
      headers:{
        // token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Ik5ld0FkbWluMi0xIiwiaWQiOiI2MjEyOGM1NzU1ZmM1ODE1MjMwYjg5NDYiLCJpYXQiOjE2NDYyNDU3NDIsImV4cCI6MTY0NjMzMjE0Mn0.YjT3XuTkkHHeUfhVZt96nqTCASJP3u_jGma0ZY8U0Mo',
      },
    })
    
  }
}
