import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { BuyerService } from 'src/app/services/buyer/buyer.service';

@Component({
  selector: 'app-buyer-info',
  templateUrl: './buyer-info.component.html',
  styleUrls: ['./buyer-info.component.scss']
})
export class BuyerInfoComponent implements OnInit, DoCheck {
  @Input() id : any;
  details: any;
  orders: any;
  completedOrders : any;
  inProgressOrders : any;
  cancelledOrders : any;
  cancelPercent : number = 0;
  inProgressPercent : number = 0;
  completedPercent : number = 0;
  imgSrc : string = "../../../../../../assets/user-avatar.jpg";

  constructor(private buyerService: BuyerService) { }

  ngOnInit(): void {
    this.buyerService.getBuyerInfo(this.id).subscribe((data: any)=>{
      this.details = data;
      console.log(data)
    }, (err: any)=>{
      console.log(err);
    });

    this.buyerService.getOrdersBuyer(this.id).subscribe((data: any)=>{
      this.orders = data;
      console.log(data)
    }, (err: any)=>{
      console.log(err);
    });
  }

  ngDoCheck(): void {
    this.completedOrders = this.orders?.filter((item: any) => item?.status === "delivered");
    this.inProgressOrders = this.orders?.filter((item: any) => item?.status === "in progress");
    this.cancelledOrders = this.orders?.filter((item: any)=> item?.status === "canceled");
    this.completedPercent = Math.floor((this.completedOrders?.length * 100) / this.orders?.length) || 0;
    this.inProgressPercent = Math.floor((this.inProgressOrders?.length * 100) / this.orders?.length) || 0;
    this.cancelPercent = Math.floor((this.cancelledOrders?.length * 100) / this.orders?.length) || 0;
  }

}
