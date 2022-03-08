import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/interfaces/seller';
import { SellerService } from 'src/app/services/seller/seller.service';


@Component({
  
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {
  tableHeader: string[] = ['Name', 'Email', 'City', 'Region', 'Rate', 'Status', 'Action']
  countOfSellers: number = 0;
  sellersData: Seller[] = []
  
  constructor(private sellerService: SellerService) { }
  ngOnInit(): void {
    this.subscribeForGetSeller(1)
  }

  subscribeForGetSeller(page:number) {
    console.log(page);
    
    this.sellerService.getSellersList(page).subscribe((res: any) => {
      this.countOfSellers = res.countOfSeller
      this.sellersData = res.sellers
      console.log(this.sellersData);
      
    },
      (err) => {
        console.log(err);
      })
  }

  paginationHandler(page: number) {
    this.subscribeForGetSeller(page)
  }
}