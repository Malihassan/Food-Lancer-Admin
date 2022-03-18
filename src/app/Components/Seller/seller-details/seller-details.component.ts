import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-seller-details',
  templateUrl: './seller-details.component.html',
  styleUrls: ['./seller-details.component.scss']
})
export class SellerDetailsComponent implements OnInit, DoCheck {
  @Input() details : any;
  @Input() orders: any;
  @Input() products : any;
  completedOrders : any;
  inProgressOrders : any;
  cancelledOrders : any;

  constructor() { }

  ngOnInit(): void {


  }

  ngDoCheck(): void {
    
    this.completedOrders = this.orders.filter((item: any) => item.status === "delivered");
    this.inProgressOrders = this.orders.filter((item: any) => item.status === "in progress");
    this.cancelledOrders = this.orders.filter((item: any)=> item.status === "canceled");

  }

}
