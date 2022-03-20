import { Component, OnInit, Input, EventEmitter ,Output} from '@angular/core';
import { ProductServiceService } from '../../../services/product/product-service.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  status:any;
  category:any;
  page: number = 1;
  pageSize = 12;
  collectionSize: number = 0;
  products: [] = [];
  constructor(private productService: ProductServiceService) {
  }
  ngOnInit(): void {
    this.getStatusArr()
    this.getCategory()
   this.productsDisplay(1,this.status,this.category);
  }
  getStatusArr(){
    this.productService.getStatus(status).subscribe((res: any) => {
      this.status = res
      this.productsDisplay(this.page,this.status,this.category);
    })
  }
  getCategory(){
    this.productService.getCategory(status).subscribe((res: any) => {
      this.category = res
      this.productsDisplay(this.page,this.status,this.category);
    })
  }
  productsDisplay(page: number,status:any,category:any) {
    this.productService.getAllProduct(page,status,category).subscribe(
      (res: any) => {
        this.products = res.docs;
        this.collectionSize = res.totalDocs;
        this.pageSize = res.limit;
      },
      (err) => {
        console.log(err.error.error);
      }
    );
  }
  newPageNumber(page: number) {
    this.page = page;
    this.productsDisplay(this.page,this.status,this.category);
  }
}
