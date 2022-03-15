import { Component, OnInit } from '@angular/core';
//import { log } from 'console';

@Component({
  selector: 'app-root-product-page',
  templateUrl: './root-product-page.component.html',
  styleUrls: ['./root-product-page.component.scss']
})
export class RootProductPageComponent implements OnInit {

  blahhhhhh:any
  currentMsgFromCategoryToProduct : any;

  constructor() { }
  ngOnInit(): void {
    console.log(this.currentMsgFromCategoryToProduct);
    this.blahhhhhh="whsyy"
     console.log(this.blahhhhhh);
  }
  /* OnViewInit(){
    console.log(this.currentMsgFromCategoryToProduct)
  } */
  fwdMsgToProduct(event:any) {
    this.currentMsgFromCategoryToProduct = event;
    //console.log(this.currentMsgFromCategoryToProduct);
  }
}
