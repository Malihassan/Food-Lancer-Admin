import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-seller-products-card',
  templateUrl: './seller-products-card.component.html',
  styleUrls: ['./seller-products-card.component.scss']
})
export class SellerProductsCardComponent implements OnInit {

  @Input() cardDetails : any;
  constructor() { }

  ngOnInit(): void {
  }

}
