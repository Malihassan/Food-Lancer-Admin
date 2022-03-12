import { Component, OnInit } from '@angular/core';
//import {ProductServiceService}
import { ProductServiceService } from '../../../services/product/product-service.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any
  constructor(private productService: ProductServiceService) { }
  ngOnInit(): void {
    console.log("before res");
    this.productService.getAllProduct().subscribe((res:any) => {
      this.products = res.docs
      console.log("========>", this.products);
    })
  }
}
