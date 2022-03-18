import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-seller-details',
  templateUrl: './seller-details.component.html',
  styleUrls: ['./seller-details.component.scss']
})
export class SellerDetailsComponent implements OnInit {
  @Input() details : any;

  constructor() { }

  ngOnInit(): void {

  }

}
