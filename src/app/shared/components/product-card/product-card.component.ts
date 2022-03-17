import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { Router } from '@angular/router';
import { ProductServiceService } from '../../../services/product/product-service.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-product-card ',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product = {
    _id:"",
    name: '',
    categoryId: '',
    status: '',
    reasonOfBlock: '',
    pendingMessage: '',
    sellerId: '',
    description: '',
    image: [{_id: "", url: "" }],
    price: 0,
    addOns: [{des:"",name:"",price:0}],
    reviews: [{_id:"",sellerId:"",comments:[{message:""}],rate:0}],
    avgRate: 0,

  };
  constructor(private router: Router,private productservice:ProductServiceService,config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }
  ngOnInit(): void {
  }
  goToDetailes(){
    console.log(this.product._id);
    this.router.navigate(["product/",this.product._id]);
    this.productservice.getProductById(this.product._id)
  }
}
