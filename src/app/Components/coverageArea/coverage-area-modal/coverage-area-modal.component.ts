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
  isClicked:boolean=true;
  submitloginForm(governorate:string,region:string) {
    this.data.governorateName=governorate;
    this.data.regionName=region;
    this.clicked.emit(this.isClicked);
    this.coverageAreaService.insertCoverageAreaList(this.data).subscribe((res)=>{
    });
    
  }
  ngOnInit(): void {

  }
}
