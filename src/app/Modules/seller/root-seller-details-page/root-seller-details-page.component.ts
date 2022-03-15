import { Component, OnInit } from '@angular/core';
import { SellerDetailsService } from 'src/app/services/seller/seller-details.service';

@Component({
  selector: 'app-root-seller-details-page',
  templateUrl: './root-seller-details-page.component.html',
  styleUrls: ['./root-seller-details-page.component.scss']
})
export class RootSellerDetailsPageComponent implements OnInit {

  orders: any;
  products: any;
  details: any = {_id: '62228a936f5c946ad32d4662'}

  constructor(private sellerData: SellerDetailsService) { }

  ngOnInit(): void {
    this.sellerData.getSellerProducts(this.details._id)
    .subscribe(
      (data) => {
        this.products = data
      },
      (e) => {
        console.log(e);
      }

    );

    this.sellerData.getSellerOrders(this.details._id)
    .subscribe(
      (data) => {
        this.orders = data
      },
      (e) => {
        console.log(e);
      }

    )
  }

}
