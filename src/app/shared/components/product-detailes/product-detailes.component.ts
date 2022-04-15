import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../../../services/product/product-service.service';
//import {FormControl, Validators} from '@angular/forms';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-product-detailes',
  templateUrl: './product-detailes.component.html',
  styleUrls: ['./product-detailes.component.scss'],
})
export class ProductDetailesComponent implements OnInit {
  product: any;
  productID: any;
  inputValue = '';
  status = '';
  constructor(
    private router: ActivatedRoute,
    private productservice: ProductServiceService,
    config: NgbRatingConfig
  ) {
    config.max = 5;
    config.readonly = true;
    this.productID = this.router.snapshot.params['id'];
    console.log(this.productID);
  }
  ngOnInit(): void {
    this.displayProduct();
  }

  changeStatusToActive(e: any) {
    this.status = e.target.name;
    this.productservice.updateProductStatus(this.productID, this.status);

    this.displayProduct();
  }
  changeStatusToPending(e: any) {
    this.status = e.target.name;
    this.productservice.updateProductStatus(this.productID, this.status);

    this.displayProduct();
    //this.product.status=this.status
  }
  /////message
  onChangeValue(event: Event) {
    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;
    console.log(this.inputValue);
  }
  ////send button
  sendPendingMessage() {
    console.log(this.inputValue);
    this.productservice.sendPendingMessage(this.productID, this.inputValue);
  }
  displayProduct() {
    this.productservice.getProductById(this.productID).subscribe((res) => {
      this.product = res;
    });
  }
}
