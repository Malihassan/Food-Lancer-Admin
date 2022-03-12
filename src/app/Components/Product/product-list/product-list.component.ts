import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../../services/product/product-service.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
   page: number = 1;
   //newPage:number = 1
  pageSize = 12;
  collectionSize: number=0;
products:[] =[]
  constructor(private productService:ProductServiceService) {
  }
  ngOnInit(): void {
    this.productsDisplay(1)
  }
  productsDisplay(page:number){
    console.log(page);
    this.productService.getAllProduct(page).subscribe((res:any)=>{
      this.products=res.docs
      this.collectionSize=res.totalDocs
      this.pageSize=res.limit
      console.log(res);

    },
    (err) => {
      console.log(err);
    })
  }
  newPageNumber(page: number){
    this.page =page
    console.log(this.page);
    this.productsDisplay(this.page)
      }
}
