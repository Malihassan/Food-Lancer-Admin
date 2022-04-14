import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SellerDetailsService } from 'src/app/services/seller/seller-details.service';

@Component({
  selector: 'app-root-seller-details-page',
  templateUrl: './root-seller-details-page.component.html',
  styleUrls: ['./root-seller-details-page.component.scss']
})
export class RootSellerDetailsPageComponent implements OnInit {

  orders: any;
  products: any;
  details : any;
  id: any;

  constructor(private sellerData: SellerDetailsService, private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    console.log(this.id);
    this.sellerData.getSellerProducts(this.id)
    .subscribe(
      (data) => {
        this.products = data
        console.log(this.products)
      },
      (e) => {
        console.log(e);
      }

    );

    this.sellerData.getSellerOrders(this.id)
    .subscribe(
      (data) => {
        this.orders = data
        console.log(this.orders)
      },
      (e) => {
        console.log(e);
      }

    )

    this.sellerData.getSellerDetails(this.id)
    .subscribe(
      (data) => {
        this.details = data
        console.log(this.details)
      },
      (e) => {
        console.log(e);
      }

    )
  }

}
