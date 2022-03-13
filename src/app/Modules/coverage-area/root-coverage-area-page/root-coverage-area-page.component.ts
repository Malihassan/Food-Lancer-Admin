import { Component, OnInit, ViewChild } from '@angular/core';
import { CoverageAreaTabelComponent } from '../../../components/coverageArea/coverage-area-tabel/coverage-area-tabel.component';

@Component({
  selector: 'app-root-coverage-area-page',
  templateUrl: './root-coverage-area-page.component.html',
  styleUrls: ['./root-coverage-area-page.component.scss']
})
export class RootCoverageAreaPageComponent implements OnInit {

  constructor() { }
  @ViewChild(CoverageAreaTabelComponent,{static: false}) child :any;
  ngOnInit(): void {
  }
  querySearch:string="";
  handelSearchValue(valSearch:string){
    const valLowerCase=valSearch.toLowerCase();
    this.querySearch=valLowerCase;
    this.child.subscribeForGetCoverageArea(this.child.page,this.querySearch);

  }
  handelClickInsert(event:any){
    this.child.subscribeForGetCoverageArea(this.child.page,this.querySearch);
  }
}
