import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register/register.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  registerForm : FormGroup;
  token : any;
  errors : object[] = [];
  constructor(private memeber : FormBuilder, private registerService : RegisterService) { 
    this.registerForm = this.memeber.group({
      firstName: ['',  Validators.required],
      lastName: ['',  Validators.required],
      email:['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      userName: ['', [Validators.required, Validators.pattern('^\\S*$')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      confirmPasswordField: ['', Validators.required],
      phone:['', [Validators.required, Validators.pattern('^01[0-2,5]{1}[0-9]{8}$')]],
      image: ['', Validators.required ]
    }, { validators: [this.checkPassword, this.fileSizeChecker, this.fileTypeChecker ]})
  }
  
  ngOnInit(): void {
  }

  checkPassword: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPasswordField')?.value;
    
    return pass === confirmPass ? null : { notSame: true }
  }

  get formControls(){
    return this.registerForm.controls;
  }

  fileTypeChecker: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    const size = group.get('image')?.value.size
    console.log(size);
    // let ser = group.get('image')?.type;
    let img = group.get('image')?.value; 
    console.log(img);
    return img.type === "image/jpeg" || img.type === "image/png" ? null : { extension: true }
    
  }

  fileSizeChecker: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let img = group.get('image')?.value; 
    return img.size > 0 ? null : { size: true }
  }

  submitForm(){
    console.log(this.registerForm);
    // this.registerService.postAdmin(this.registerForm.value).subscribe(message =>{
    //   alert(message);
    // });
  }

  get notSameError(){
    return this.registerForm.errors?.['notSame'];
  }

  get extensionError(){
    return this.registerForm.errors?.['extension'];
  }

  get sizeError(){
    return this.registerForm.errors?.['size'];
  }

}
