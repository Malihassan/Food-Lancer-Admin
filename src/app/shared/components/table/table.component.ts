import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Seller } from 'src/app/interfaces/seller';
import { SearchFilterTablePipe } from '../../pipes/search-filter-table.pipe';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [
    SearchFilterTablePipe
  ]

})
export class TableComponent implements OnInit {
  searchValue: string = '';
  @Input() tableHeader: string[] = [];
  @Input() sellersData: Seller[] = [];
  @Input() countOfSellers:number =0
  @Output() paginationHandler = new EventEmitter<number>()
  page:number = 0;
  pageSize = 1;
  collectionSize = this.countOfSellers;
  sellers = this.sellersData;
  constructor(private pipe:SearchFilterTablePipe) {    
    this.refreshCountries() 
  }
  ngOnInit(): void {
  }
  
  
  refreshCountries() {    
    this.paginationHandler.emit(this.page)
    
    this.sellers = this.sellersData
      .map((seller) => ({...seller }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  onSearchChange(searchValue:string){
    this.sellers = this.pipe.transform(this.sellersData,searchValue) 
    .map((seller) => ({...seller }))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    console.log(this.sellersData);
        
  }
 

}
