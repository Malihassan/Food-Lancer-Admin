import { Component, Input, OnInit } from '@angular/core';
import { Buyer } from 'src/app/interfaces/buyer';
import { BuyerService } from 'src/app/services/buyer/buyer.service';
@Component({
  selector: 'app-buyer-table',
  templateUrl: './buyer-table.component.html',
  styleUrls: ['./buyer-table.component.scss']
})
export class BuyerTableComponent implements OnInit {
  tableHeader: string[] = ['Name', 'Email', 'Address', 'Phone', 'Status', 'Action']
  countOfBuyers: number = 0;
  limit:number=0
  buyersData: Buyer[] = []
  @Input() query :any;
  constructor(private buyerService: BuyerService) {

  }

  ngOnInit(): void {
    this.subscribeForGetBuyer(1)
  }
  subscribeForGetBuyer(page: number) {

    this.buyerService.getBuyerList(page).subscribe((res: any) => {
      console.log('==>',this.query);
      
      this.countOfBuyers = res.totalDocs
      this.limit = res.limit
      this.buyersData = res.docs
    },
      (err) => {
        console.log(err);
      })
  }
  paginationHandler(page: number) {
    this.subscribeForGetBuyer(page)    
  }
}
