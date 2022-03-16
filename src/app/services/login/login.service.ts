import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: HttpClient) { }

  adminLogin(adminData : any){
    return this.http.post("/admin/account/login", adminData)
  }
}
