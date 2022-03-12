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
  @Output() updateStatus = new EventEmitter<{id:string,status:string}>()
  @Input() collectionSize: number = 0;
  page: number = 1;
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
  changeStatus($event:any,id:string){
    let checkedValue = $event.target.value
    const ischecked = $event.target.checked
    checkedValue = ischecked ? 'active':'blocked'
    console.log(checkedValue,ischecked,id);
    this.updateStatus.emit({id,status:checkedValue})
  }
}
