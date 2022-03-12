import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  typeSelected: string;
  constructor(private spinnerService: NgxSpinnerService) {
    this.typeSelected = 'ball-fussion';
  }
  ngOnInit(): void {
    // this.spinnerService.show();

    // setTimeout(() => {
    //   this.spinnerService.hide();
    // }, 2000); // 5 seconds
  }
}
