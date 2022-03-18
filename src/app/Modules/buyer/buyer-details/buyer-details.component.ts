import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/interfaces/order';
import { BuyerService } from 'src/app/services/buyer/buyer.service';

@Component({
  selector: 'app-buyer-details',
  templateUrl: './buyer-details.component.html',
  styleUrls: ['./buyer-details.component.scss']
})
export class BuyerDetailsComponent implements OnInit {
  id :string  = ''
  orders:Order[]=[]
  resError:string=''
  constructor(private buyerService:BuyerService,private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.getOrdersBuyer();
  }
  getOrdersBuyer(){
    this.buyerService.getOrdersBuyer(this.id).subscribe((res:any)=>{
      this.orders = res
    },(err)=>{
      this.resError=err.message
    })
  }
}
