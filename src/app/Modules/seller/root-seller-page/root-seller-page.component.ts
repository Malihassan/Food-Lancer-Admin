import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/interfaces/seller';
import { SellerService } from 'src/app/services/seller/seller.service';

@Component({
  selector: 'app-root-seller-page',
  templateUrl: './root-seller-page.component.html',
  styleUrls: ['./root-seller-page.component.scss']
})
export class RootSellerPageComponent implements OnInit {
  tableHeader: string[] = ['Name', 'Email', 'City', 'Region', 'Rate', 'Status', 'Action', 'Profile']
  countOfSellers: number = 0;
  sellersData: Seller[] = []
  limit: number = 0
  query: any = {}
  page:number = 1
  constructor(private sellerService: SellerService) { }

  ngOnInit(): void {
    this.getSellerList(this.page)
  }
  getSellersAfterFilter(queryReq: any) {
    this.query = queryReq
    this.getSellerList(1, queryReq)
  }
  getSellerList(page: number, query: any = {}) {

    this.sellerService.getSellersList(page, query).subscribe((res: any) => {
      this.countOfSellers = res.totalDocs
      this.limit = res.limit
      this.sellersData = res.docs
    },
      (err) => {
        console.log(err);
      })
  }
  updateSellerStatus(seller = { id: '', status: '' }) {
    this.sellerService.updateSellerStatus(seller.id, seller.status)
      .subscribe((res: any) => {
        this.getSellerList(this.page, this.query)

      },
        (response) => {
          console.log('message error', response.error);
        })
  }
  paginationHandler(page: number) {
    this.page = page
    this.getSellerList(this.page, this.query)
  }
}
