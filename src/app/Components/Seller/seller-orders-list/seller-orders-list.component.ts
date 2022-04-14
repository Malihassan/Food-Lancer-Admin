import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-seller-orders-list',
  templateUrl: './seller-orders-list.component.html',
  styleUrls: ['./seller-orders-list.component.scss']
})
export class SellerOrdersListComponent implements OnInit, DoCheck {
  @Input() cards : any;
  viewCards : any;
  isReadMore: boolean = false;
  constructor() { }

  ngOnInit(): void {
    
  }

  ngDoCheck(): void {
    if(this.cards && !this.isReadMore){
      this.viewCards = this.cards?.slice(0,3);
    } else {
      this.viewCards = this.cards;
    }
  }

  showMore(){
    this.isReadMore = !this.isReadMore;
  }

}
