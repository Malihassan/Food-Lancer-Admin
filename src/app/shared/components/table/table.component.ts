import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [
  ]

})
export class TableComponent implements OnInit {
  @Input() tableHeader?: string[];
  @Input() tableData: any =[];
  
  @Output() paginationHandler = new EventEmitter<number>()
  
  page: number = 1;
  pageSize = 4;
  @Input() collectionSize: number=0;

  constructor() {
    this.refreshPagination()
  }


  ngOnInit(): void {
    
  }


  refreshPagination() {
    this.paginationHandler.emit(this.page)
    }
}
