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
    this.getStatus()
    //this.status=this.currentMsgFromCategoryToProduct
    this.productsDisplay(1);
    //console.log(this.status);
    //console.log(this.blahhhhhh);
  }
  getStatus(){
    this.productService.getStatus(status).subscribe((res: any) => {
      console.log('====>',res);
    })
  }
  //this.paginationHandler.emit(this.page)
  productsDisplay(page: number) {

    this.productService.getAllProduct(page,this.currentMsgFromCategoryToProduct).subscribe(
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
    this.page = page;
    this.productsDisplay(this.page);
  }
}
