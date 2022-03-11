import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter-seller',
  templateUrl: './filter-seller.component.html',
  styleUrls: ['./filter-seller.component.scss']
})
export class FilterSellerComponent implements OnInit {
  sellerFilterFormGroup: FormGroup
  @Output() getSellersAfterFilter = new EventEmitter<any>()
  status: any = [];
  rate: any = []
  constructor(private fb: FormBuilder) {
    this.sellerFilterFormGroup = this.fb.group({
      email: ['', [Validators.email, Validators.required]]
    })
  }

  ngOnInit(): void {
  }
  get formControls() {
    return this.sellerFilterFormGroup.controls
  }
  submitSellerFilterForm() {
    let query: any = {}
    let formData = this.sellerFilterFormGroup.value
    formData.email ? query.email = formData.email : ""
    this.status.length > 0 ? query.status = this.status : ""    
    this.rate.length > 0 ? query.rate =JSON.stringify(this.rate ) : ''

    console.log(query);
      
    this.getSellersAfterFilter.emit(query)
  }
  changeStatusSelection($event: any) {
    const checkedValue = $event.target.value
    const ischecked = $event.target.checked
    if (!ischecked) {
      this.status = this.status.filter((item: string) => item !== checkedValue)
      return
    }
    this.status.push(checkedValue)
  }
  changeRateSelection($event: any) {
    let checkedValue = $event.target.value
    const isChecked = $event.target.checked
    if (!isChecked) {
      this.rate = this.rate.filter((item: string) => item !== checkedValue)
      return
    }
    this.rate.push(checkedValue)

  }
  formValid() {
    let validForm = this.sellerFilterFormGroup.valid
    if (validForm || this.status.length > 0 || this.rate.length > 0) {
      return true
    }
    return false
  }
}
