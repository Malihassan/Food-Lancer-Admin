import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  private productID = new BehaviorSubject(0);
  private newStatus = new BehaviorSubject('');
  private CategoryId = new BehaviorSubject("");
  constructor(private http: HttpClient) {}
  getAllProduct(page: number, status: any,categoryId:any='') {
    return this.http.get(`/admin/product/allProducts`, {
      params: {status,page,categoryId},
    });
  }
  getProductById(productID:any) {
    console.log(productID);

    return this.http.get(`/admin/product/${productID}`);
  }
  updateProductStatus(newProductID:any,status:any) {
    console.log(status);
    this.productID.next(newProductID);
    console.log(newProductID);
    this.http
      .patch(`/admin/product/${newProductID}`, {
        status
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
  sendPendingMessage(newProductID:any, message: string) {
    this.productID.next(newProductID);
    console.log(newProductID);
    return this.http
      .patch(`/admin/product/${newProductID}/pending`, {
        pendingMessage: `${message}`,
      })
      // .subscribe(
      //   (val) => {
      //     console.log('PATCH resault', val);
      //   },
      //   (response) => {
      //     console.log('message error', response.error);
      //   },
      //   () => {
      //     console.log('The PATCH observable is now completed.');
      //   }
      // );
  }
  getStatus(status: any) {
    this.newStatus.next(status);
    return this.newStatus;
  }
  getCategory(category: any) {
    this.CategoryId.next(category);
    return this.CategoryId;
  }
}
