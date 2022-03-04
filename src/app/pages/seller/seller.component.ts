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
  countOfSellers:number=0;
  sellers:Seller[]=[]
  // tableData: any[] = [
  //   {
  //     _id: "620bbae6290ff65761f08bec",
  //     userName: "momen alhendawy",
  //     email: "mommmn@gmail.com",
  //     rate: 2,
  //     status: "blocked",
  //     coverageArea: {
  //       _id: "6218f69173583a2e7790490b",
  //       governorateName: "Assiut",
  //       regionName: "dayroud"
  //     }
  //   },
  //   {
  //     _id: "620bbae6290ff65761f08bec",
  //     userName: "momen alhendawy",
  //     email: "mommmn@gmail.com",
  //     rate: 3,
  //     status: "pending",
  //     coverageArea: {
  //       _id: "6218f69173583a2e7790490b",
  //       governorateName: "Assiut",
  //       regionName: "dayroud"
  //     }
  //   },
  //   {
  //     _id: "620bbae6290ff65761f08bec",
  //     userName: "momen alhendawy",
  //     email: "mommmn@gmail.com",
  //     rate: 0,
  //     status: "pending",
  //     coverageArea: {
  //       _id: "6218f69173583a2e7790490b",
  //       governorateName: "Assiut",
  //       regionName: "dayroud"
  //     }
  //   },
  //   {
  //     _id: "620bbae6290ff65761f08bec",
  //     userName: "momen alhendawy",
  //     email: "mommmn@gmail.com",
  //     rate: 2,
  //     status: "blocked",
  //     coverageArea: {
  //       _id: "6218f69173583a2e7790490b",
  //       governorateName: "Assiut",
  //       regionName: "dayroud"
  //     }
  //   },
  //   {
  //     _id: "620bbae6290ff65761f08bec",
  //     userName: "momen alhendawy",
  //     email: "mommmn@gmail.com",
  //     rate: 3,
  //     status: "pending",
  //     coverageArea: {
  //       _id: "6218f69173583a2e7790490b",
  //       governorateName: "Assiut",
  //       regionName: "dayroud"
  //     }
  //   },
  //   {
  //     _id: "620bbae6290ff65761f08bec",
  //     userName: "momen alhendawy",
  //     email: "mommmn@gmail.com",
  //     rate: 0,
  //     status: "pending",
  //     coverageArea: {
  //       _id: "6218f69173583a2e7790490b",
  //       governorateName: "Assiut",
  //       regionName: "dayroud"
  //     }
  //   },
  //   {
  //     _id: "620bbae6290ff65761f08bec",
  //     userName: "momen alhendawy",
  //     email: "mommmn@gmail.com",
  //     rate: 2,
  //     status: "blocked",
  //     coverageArea: {
  //       _id: "6218f69173583a2e7790490b",
  //       governorateName: "Assiut",
  //       regionName: "dayroud"
  //     }
  //   },
  //   {
  //     _id: "620bbae6290ff65761f08bec",
  //     userName: "momen alhendawy",
  //     email: "mommmn@gmail.com",
  //     rate: 3,
  //     status: "pending",
  //     coverageArea: {
  //       _id: "6218f69173583a2e7790490b",
  //       governorateName: "Assiut",
  //       regionName: "dayroud"
  //     }
  //   },
  //   {
  //     _id: "620bbae6290ff65761f08bec",
  //     userName: "momen alhendawy",
  //     email: "mommmn@gmail.com",
  //     rate: 0,
  //     status: "pending",
  //     coverageArea: {
  //       _id: "6218f69173583a2e7790490b",
  //       governorateName: "Assiut",
  //       regionName: "dayroud"
  //     }
  //   },
  //   {
  //     _id: "620bbae6290ff65761f08bec",
  //     userName: "momen alhendawy",
  //     email: "mommmn@gmail.com",
  //     rate: 0,
  //     status: "blocked",
  //     coverageArea: {
  //       _id: "6218f69173583a2e7790490b",
  //       governorateName: "Assiut",
  //       regionName: "dayroud"
  //     }
  //   },
  //   {
  //     "_id": "620eccd98a800f893073ea53",
  //     userName: "momen alhendawy",
  //     "email": "tasneemsalah1234@gmail.com",
  //     "rate": 3.5,
  //     "status": "blocked",
  //     coverageArea: {
  //       "_id": "6218f68473583a2e77904909",
  //       "governorateName": "Assiut",
  //       "regionName": "manfloud"
  //     }
  //   },
  //   {
  //     "_id": "620eccd98a800f893073ea53",
  //     userName: "momen alhendawy",
  //     "email": "tasneemsalah1234@gmail.com",
  //     "rate": 4,
  //     "status": "active",
  //     coverageArea: {
  //       "_id": "6218f68473583a2e77904909",
  //       "governorateName": "Assiut",
  //       "regionName": "manfloud"
  //     }
  //   },
  //   {
  //     _id: "620bbae6290ff65761f08bec",
  //     userName: "bilal",
  //     email: "mommmn@gmail.com",
  //     rate: 4.2,
  //     status: "pending",
  //     coverageArea: {
  //       _id: "6218f69173583a2e7790490b",
  //       governorateName: "Assiut",
  //       regionName: "dayroud"
  //     }
  //   },
  //   {
  //     "_id": "620eccd98a800f893073ea53",
  //     userName: "momen alhendawy",
  //     "email": "tasneemsalah1234@gmail.com",
  //     "rate": 4,
  //     "status": "active",
  //     coverageArea: {
  //       "_id": "6218f68473583a2e77904909",
  //       "governorateName": "Assiut",
  //       "regionName": "manfloud"
  //     }
  //   },
  //   {
  //     _id: "620bbae6290ff65761f08bec",
  //     userName: "bilal",
  //     email: "mommmn@gmail.com",
  //     rate: 4.2,
  //     status: "pending",
  //     coverageArea: {
  //       _id: "6218f69173583a2e7790490b",
  //       governorateName: "Assiut",
  //       regionName: "dayroud"
  //     }
  //   },
  //   {
  //     _id: "620bbae6290ff65761f08bec",
  //     userName: "bilal",
  //     email: "mommmn@gmail.com",
  //     rate: 4.2,
  //     status: "pending",
  //     coverageArea: {
  //       _id: "6218f69173583a2e7790490b",
  //       governorateName: "Assiut",
  //       regionName: "dayroud"
  //     }
  //   }
  // ]
  constructor(private sellerService: SellerService) { }
  ngOnInit(): void {
    this.sellerService.getAllUsersList().subscribe((res:any) => {
      this.countOfSellers = res.countOfSeller
      this.sellers=res.allSellers      
    },
      (err) => {
        console.log(err);
      })
  }
  paginationHandler(page: number) {
    console.log("page", page);
  }
}