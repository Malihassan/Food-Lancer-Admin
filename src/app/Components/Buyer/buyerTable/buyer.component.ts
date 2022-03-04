import { Component, OnInit } from '@angular/core';
import { Buyer } from 'src/app/interfaces/buyer';
import { BuyerService } from 'src/app/services/buyer/buyer.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.scss']
})
export class BuyerComponent implements OnInit {
  tableHeader: string[] = ['Name', 'Email', 'Address', 'Phone', 'Status', 'Action']
  countOfBuyers: number = 0;
  buyersData: Buyer[] = []
  constructor(private buyerService: BuyerService) {

  }

  ngOnInit(): void {
    this.subscribeForGetBuyer(1)
  }
  subscribeForGetBuyer(page: number) {

    this.buyerService.getBuyerList(page).subscribe((res: any) => {
      this.countOfBuyers = res.countOfBuyer
      this.buyersData = res.buyers
      console.log(this.buyersData);
    },
      (err) => {
        console.log(err);
      })
  }
  paginationHandler(page: number) {
    this.subscribeForGetBuyer(page)
  }
}
