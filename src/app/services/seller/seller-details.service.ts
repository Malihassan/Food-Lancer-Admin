import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellerDetailsService {

  constructor(private http : HttpClient) { }

  getSellerProducts(id:string){
    return this.http.get(`http://localhost:3000/admin/seller/${id}/products`)
  }

  getSellerOrders(id:string){
    return this.http.get(`http://localhost:3000/admin/seller/${id}/orders`)
  }
}
