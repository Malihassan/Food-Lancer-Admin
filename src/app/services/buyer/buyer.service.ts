import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  constructor(private http: HttpClient) { }

  getBuyerList(pageNum: number,query:any={}) {
    return this.http.get(`${environment.apiUrl}/buyer/allBuyers?page=${pageNum}`, {
      params: { ...query },
  
    })
  }
  updateBuyerStatus(id: string, status: string) {
    const body = { status }
    // ${environment.apiUrl}
    return this.http.patch(`/admin/buyer/Buyerstatus/${id}`,body)
  }
}
