import { CoverageAreaService } from './../../../services/coverageArea/coverage-area.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-coverage-area-modal',
  templateUrl: './coverage-area-modal.component.html',
  styleUrls: ['./coverage-area-modal.component.scss'],
})
export class CoverageAreaModalComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  isExisted=false;
  isDisabled=true;
  data:any={governorateName:"",regionName:""};
  constructor(private FB:FormBuilder,private coverageAreaService:CoverageAreaService) {
    this.registerForm = this.FB.group({
      governorateName: ['', [Validators.required,Validators.minLength(5)]],
      regionName: ['', [Validators.required,Validators.minLength(5)]],
    });
  }
  get f() {
    return this.registerForm.controls;
  }
  get formControls() {
    return this.registerForm.controls;
  }
  @Output() clicked = new EventEmitter<any>();
  @Output() valueSearch = new EventEmitter<any>();
  isClicked:boolean=true;
  searchByRegionORGovernonateName(val:any){
    this.valueSearch.emit(val);
  }
  submitloginForm(governorate:string,region:string) {
    this.data.governorateName=governorate;
    this.data.regionName=region;
    this.clicked.emit(this.isClicked);
    this.coverageAreaService.insertCoverageAreaList(this.data).subscribe((res)=>{
    },
      err=>{
        if (err.status==400)
          this.isExisted=true;
      }
    );
  }
  handelBtnStatus(val:string)
  {
    if (val.length===0)
    {
      this.isDisabled=true;
      return;
    }
    this.isDisabled=false;

  }
  ngOnInit(): void {

  }
}
