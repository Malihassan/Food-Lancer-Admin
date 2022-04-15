import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/interfaces/order';
import { BuyerService } from 'src/app/services/buyer/buyer.service';

@Component({
  selector: 'app-buyer-details',
  templateUrl: './buyer-details.component.html',
  styleUrls: ['./buyer-details.component.scss']
})
export class BuyerDetailsComponent implements OnInit, DoCheck {
  id :string  = ''
  orders:Order[]=[]
  viewCards:Order[]=[]
  resError:string=''
  isReadMore: boolean = false;
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

  ngDoCheck(): void {
    if(this.orders && !this.isReadMore){
      this.viewCards = this.orders?.slice(0,3);
    } else {
      this.viewCards = this.orders;
    }
  }

  showMore(){
    this.isReadMore = !this.isReadMore;
  }
}
