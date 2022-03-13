import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.scss'],
})
export class OrderSearchComponent implements OnInit {
  constructor() {}
  query = {
    max: 0,
    min: 0,
    status: 0,
  };

  searchSubmit() {
    console.log(this.query);
  }

  ngOnInit(): void {}
}
