import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss'],
})
export class OrdersPageComponent implements OnInit {
  orders: any = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  constructor() {}

  ngOnInit(): void {}
}
