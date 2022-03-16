import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  postAdmin(newAdmin: any){
    return this.http.post("/admin/account/signup", newAdmin)
  }
  
}
