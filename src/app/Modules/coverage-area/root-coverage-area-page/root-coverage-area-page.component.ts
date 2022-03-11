import { Component, OnInit, ViewChild } from '@angular/core';
// import { CoverageAreaService } from 'src/app/services/coverageArea/coverage-area.service';
import { CoverageAreaTabelComponent } from '../../../components/coverageArea/coverage-area-tabel/coverage-area-tabel.component';

@Component({
  selector: 'app-root-coverage-area-page',
  templateUrl: './root-coverage-area-page.component.html',
  styleUrls: ['./root-coverage-area-page.component.scss']
})
export class RootCoverageAreaPageComponent implements OnInit {

  constructor() { }
  @ViewChild(CoverageAreaTabelComponent) child :any;
  ngOnInit(): void {
  }
  handelClickInsert(event:any){
    // console.log(this.child.coverageAreaData);
    this.child.subscribeForGetCoverageArea(this.child.page);
    // console.log(this.child.coverageAreaData);
  }
}
