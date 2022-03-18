import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellerDetailsService {

  constructor(private http : HttpClient) { }

  getSellerProducts(id:string){
    return this.http.get(`/admin/seller/${id}/products`)
  }

  getSellerOrders(id:string){
    return this.http.get(`/admin/seller/${id}/orders`)
  }

  getSellerDetails(id: string){
    return this.http.get(`/admin/seller/${id}`)
  }
}
