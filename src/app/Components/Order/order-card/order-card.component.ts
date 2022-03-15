import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent implements OnInit {
  @Input() order: any = '';
  constructor() {}
  textColor: any;
  src: any;

  ngOnInit(): void {
    console.log(this.order);

    this.textColor =
      this.order.status === 'in progress'
        ? 'text-warning'
        : this.order.status === 'done'
        ? 'text-success'
        : 'text-danger';
  }
}
