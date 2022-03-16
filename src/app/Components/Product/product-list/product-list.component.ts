import { Component, OnInit, Input, EventEmitter ,Output} from '@angular/core';
import { ProductServiceService } from '../../../services/product/product-service.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() currentMsgFromCategoryToProduct: any=[];
  @Input() blahhhhhh: any;
  //@Output() fwdMsgToProduct = new EventEmitter<any>()
  status:any;
  page: number = 1;
  pageSize = 12;
  collectionSize: number = 0;
  products: [] = [];
  constructor(private productService: ProductServiceService) {
  }
  ngOnInit(): void {
    console.log(this.status);

    //this.getStatusArr()
   // this.productsDisplay(1,this.status);
  }
  getStatusArr(){
    this.productService.getStatus(status).subscribe((res: any) => {
      this.status = res
      console.log(this.status);
    })
  }
  productsDisplay(page: number,status:any) {
    this.getStatusArr()
    console.log(this.status);
    this.productService.getAllProduct(page,status).subscribe(
      (res: any) => {
        this.products = res.docs;
        this.collectionSize = res.totalDocs;
        this.pageSize = res.limit;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  newPageNumber(page: number) {
    console.log(this.status);
    this.page = page;
    this.productsDisplay(this.page,this.status);
  }
}
