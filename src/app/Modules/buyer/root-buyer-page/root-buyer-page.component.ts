import { Component, OnInit } from '@angular/core';
import { Buyer } from 'src/app/interfaces/buyer';
import { BuyerService } from 'src/app/services/buyer/buyer.service';

@Component({
  selector: 'app-root-buyer-page',
  templateUrl: './root-buyer-page.component.html',
  styleUrls: ['./root-buyer-page.component.scss']
})
export class RootBuyerPageComponent implements OnInit {
  tableHeader: string[] = ['Name', 'Email', 'Address', 'Phone', 'Status', 'Action']
  countOfBuyers: number = 0;
  limit:number=0
  buyersData: Buyer[] = []
  query:any={}
  constructor(private buyerService: BuyerService) { }

  ngOnInit(): void {
    this.getBuyerList(1)
  }
  getBuyersAfterFilter(queryReq:any){
    this.query=queryReq    
    this.getBuyerList(1,queryReq)
  }
  getBuyerList(page: number,query:any={}) {
    
    this.buyerService.getBuyerList(page,query).subscribe((res: any) => {      
      this.countOfBuyers = res.totalDocs
      this.limit = res.limit
      this.buyersData = res.docs
    },
      (err) => {
        console.log(err);
      })
  }
  paginationHandler(page: number) {
    this.getBuyerList(page,this.query)    
  }

}
