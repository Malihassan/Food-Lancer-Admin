import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-seller-orders-card',
  templateUrl: './seller-orders-card.component.html',
  styleUrls: ['./seller-orders-card.component.scss']
})
export class SellerOrdersCardComponent implements OnInit {
  @Input() cardDetails : any;
  constructor() { }

  ngOnInit(): void {
  }

}
