import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seller } from 'src/app/interfaces/seller';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  constructor(private http: HttpClient) { }

  getSellersList(pageNum: number, query: any) {
    return this.http.get(
      `/admin/seller/allSellers?page=${pageNum}`,
      {
        params: { ...query },
      }
    );
  }
  updateSellerStatus(id: string, status: string) {
    const body = { status }
    console.log('body ==>', body);
    // ${environment.apiUrl}
    return this.http.patch(`/admin/seller/sellerStatus/${id}`,body)
  }
}
