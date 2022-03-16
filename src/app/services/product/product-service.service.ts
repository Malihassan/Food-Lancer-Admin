import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  private productID = new BehaviorSubject(0);
  private newStatus = new BehaviorSubject("");
  //public status = new BehaviorSubject(["active"]);
  constructor(private http: HttpClient) {}
  getAllProduct(page:number,statuss:any) {
    statuss=["active","blocked"]
    console.log(statuss);
   return this.http.get(`http://localhost:3000/admin/product/allProducts?page=${page}`,
   {
    params: {statuss},
  }
   );
  }
  getProductById(productID: any) {
    console.log(productID);

    return this.http.get(`http://localhost:3000/admin/product/${productID}`);
  }
  updateProductStatusToAccepted(newProductID: any) {
    this.productID.next(newProductID);
    console.log(newProductID);
    this.http
      .patch(`http://localhost:3000/admin/product/${newProductID}`, {
        status: 'active',
      })
      .subscribe(
        (val) => {
          console.log('PATCH resault', val);
        },
        (response) => {
          console.log('message error', response.error);
        },
        () => {
          console.log('The PATCH observable is now completed.');
        }
      );
  }
  sendPendingMessage(newProductID:any,message: string) {
    this.productID.next(newProductID);
    console.log(newProductID);
    this.http
      .patch(`http://localhost:3000/admin/product/${newProductID}/pending`, {
        "pendingMessage": `${message}`,
      })
      .subscribe(
        (val) => {
          console.log('PATCH resault', val);
        },
        (response) => {
          console.log('message error', response.error);
        },
        () => {
          console.log('The PATCH observable is now completed.');
        }
      );
  }
  getStatus(status:any){
   this.newStatus.next(status)
   return this.newStatus
  }
}
