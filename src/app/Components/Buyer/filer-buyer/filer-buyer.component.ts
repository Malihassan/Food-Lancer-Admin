import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuyerService } from 'src/app/services/buyer/buyer.service';

@Component({
  selector: 'app-filer-buyer',
  templateUrl: './filer-buyer.component.html',
  styleUrls: ['./filer-buyer.component.scss']
})
export class FilerBuyerComponent implements OnInit {
  buyerFilterFormGroup: FormGroup
  status: any = [];
  query: any = {}
  @Output() getBuyersAfterFilter = new EventEmitter<any>()
  constructor(private fb: FormBuilder) {
    this.buyerFilterFormGroup = this.fb.group({
      email: ['', [Validators.email,Validators.required]],
    })
  }

  ngOnInit(): void { }

  get formControls() {
    return this.buyerFilterFormGroup.controls;
  }
  changeSelection($event: any) {
    const checkedValue = $event.target.value
    const ischecked = $event.target.checked
    if (!ischecked) {
      this.status = this.status.filter((item: string) => item !== checkedValue)
    }else{
      this.status.push(checkedValue)
    }
    this.getBuyersAfterFilter.emit({status:this.status})
  }
  submitBuyerFilterForm() {
    let formData = this.buyerFilterFormGroup.value
    formData.email ? this.query.email = formData.email : ""
    this.getBuyersAfterFilter.emit(this.query)
    
  }

}
