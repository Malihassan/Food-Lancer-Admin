import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isFound = new BehaviorSubject(true);
  constructor(private http: HttpClient) { }
  getisFoundValue() {
    return this.isFound;
  }
  setisFoundValue(newCounterVal: boolean) {
    this.isFound.next(newCounterVal);
  }
  adminLogin(adminData : any){
    return this.http.post("/admin/account/login", adminData)
  }
  adminLogout(){
    return this.http.get("/admin/account/logout" )
  }
}
