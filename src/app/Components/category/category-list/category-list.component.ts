import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { ProductServiceService } from './../../../services/product/product-service.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  @Output() productsByStatus: EventEmitter<string[]> = new EventEmitter<string[]>();
   statusArray:any=[]
  public isCollapsed = false;
  constructor(private productService:ProductServiceService) {}
  ngOnInit(): void {

  }
  onCheckboxChange(e:any){
    const checkedValue = e.target.value
    const isChecked = e.target.checked
    if (!isChecked) {
      this.statusArray = this.statusArray.filter((item: string) => item !== checkedValue)
      //this.productsByStatus.emit(this.statusArray);
      return
    }
    this.statusArray.push(checkedValue)
    //this.productsByStatus.emit(this.statusArray);
    console.log(this.statusArray);

    this.productService.getStatus(this.statusArray)
  }


}
