import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [
  ]

})
export class TableComponent implements OnInit {
  @Input() tableHeader?: string[];
  @Input() tableData: any = [];
  @Input() pageSize: number = 0
  @Output() paginationHandler = new EventEmitter<number>()

  page: number = 1;
  @Input() collectionSize: number = 0;
  constructor(private router:Router) {
    this.refreshPagination()
  }
  ngOnInit(): void {

  }
  refreshPagination() {
    this.paginationHandler.emit(this.page)
  }
  toDirect(id:string){    
    this.router.navigate(['/buyer',id])
  }
}
