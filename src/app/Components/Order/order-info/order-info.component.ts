import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../../interfaces/order';
import { OrderService } from '../../../services/order/order.service';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss'],
})
export class OrderInfoComponent implements OnInit {
  active = 'top';
  order: any;
  id: any;

  textColor: any;
  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log(this.id);
    });
    this.orderService.search({ id: this.id }).subscribe((res: any) => {
      this.order = res.data[0];
      console.log(this.order);
      this.textColor =
        this.order.status === 'in progress'
          ? 'text-warning'
          : this.order.status === 'done'
          ? 'text-success'
          : 'text-danger';
    });
  }
}
