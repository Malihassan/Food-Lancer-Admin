import { Component, Input, OnInit } from '@angular/core';
import { CoverageAreaService } from '../../../services/coverageArea/coverage-area.service';
import { CoverageArea } from '../../../interfaces/coverage-area';

@Component({
  selector: 'app-coverage-area-tabel',
  templateUrl: './coverage-area-tabel.component.html',
  styleUrls: ['./coverage-area-tabel.component.scss'],
})
export class CoverageAreaTabelComponent implements OnInit {
  constructor(private coverageAreaService: CoverageAreaService) {}
  tableHeader: string[] = ['Governorate Name', 'Region Name', 'Action'];
  countOfCoveragesArea: number = 0;
  coverageAreaData: CoverageArea[] = [];
  ngOnInit(): void {
    this.subscribeForGetCoverageArea(1);
  }
  page: number = 1;
  pageSize: number = 4;
  subscribeForGetCoverageArea(page: number) {
    this.coverageAreaService.getCoverageAreaList(page).subscribe(
      (res: any) => {
        this.countOfCoveragesArea = res.countOfCoveragArea;
        this.coverageAreaData = res.coverageAreas;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  paginationHandler(page: number) {
    this.subscribeForGetCoverageArea(page);
  }
  refreshPagination() {
    this.subscribeForGetCoverageArea(this.page);
  }
  deleteCoverageArea(id:any) {
    this.coverageAreaService.deleteCoverageArea(id).subscribe((res:any)=>{
      this.subscribeForGetCoverageArea(this.page);

    });
  }
}
