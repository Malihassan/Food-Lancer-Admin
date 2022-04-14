import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-seller-products-list',
  templateUrl: './seller-products-list.component.html',
  styleUrls: ['./seller-products-list.component.scss']
})
export class SellerProductsListComponent implements OnInit, DoCheck {
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
