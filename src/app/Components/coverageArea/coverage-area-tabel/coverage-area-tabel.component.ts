import { Component, Input, OnInit } from '@angular/core';
import { CoverageAreaService } from '../../../services/coverageArea/coverage-area.service';
import { CoverageArea } from '../../../interfaces/coverage-area';

@Component({
  selector: 'app-coverage-area-tabel',
  templateUrl: './coverage-area-tabel.component.html',
  styleUrls: ['./coverage-area-tabel.component.scss'],
})
export class CoverageAreaTabelComponent implements OnInit {
  checkData:boolean=false;
  constructor(private coverageAreaService: CoverageAreaService) {}
  @Input() valueOfSearch:string="";
  tableHeader: string[] = ['Governorate Name', 'Region Name', 'Action'];
  countOfCoveragesArea: number = 0;
  coverageAreaData: CoverageArea[] = [];
  ngOnInit(): void {
    this.subscribeForGetCoverageArea(1,this.valueOfSearch);
  }
  page: number = 1;
  pageSize: number = 6;
  subscribeForGetCoverageArea(page: number,query:string) {
    console.log("subScripe",query)
    this.coverageAreaService.getCoverageAreaList(page,query).subscribe(
      (res: any) => {
        this.countOfCoveragesArea = res.countOfCoveragArea;
        this.coverageAreaData = res.coverageAreas;
        if(this.coverageAreaData.length===0)
        {
          this.checkData=true;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
  paginationHandler(page: number) {
    this.subscribeForGetCoverageArea(page,this.valueOfSearch);
  }
  refreshPagination() {
    this.subscribeForGetCoverageArea(this.page,this.valueOfSearch);
  }
  deleteCoverageArea(id:any) {
    this.coverageAreaService.deleteCoverageArea(id).subscribe((res:any)=>{
      this.subscribeForGetCoverageArea(this.page,this.valueOfSearch);
    });
  }
}
