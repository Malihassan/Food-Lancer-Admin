import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { Router } from '@angular/router';
import { ProductServiceService } from '../../../services/product/product-service.service';
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
    image: [{}],
    price: 0,
    addOns: [{}],
    reviews: [{}],
    avgRate: 0,
  };
  constructor(private router: Router,private productservice:ProductServiceService) {}
  ngOnInit(): void {
  }
  goToDetailes(){
    console.log(this.product._id);
    this.router.navigate(["product/",this.product._id]);
    this.productservice.getProductById(this.product._id)
  }
}
