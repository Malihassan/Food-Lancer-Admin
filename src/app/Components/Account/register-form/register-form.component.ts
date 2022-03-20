import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register/register.service';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  token: any;
  img: any;
  constructor(private memeber: FormBuilder, private registerService: RegisterService) {
    this.registerForm = this.memeber.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      userName: ['', [Validators.required, Validators.pattern('^\\S*$')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      confirmPasswordField: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^01[0-2,5]{1}[0-9]{8}$')]],
      image: ['', [Validators.required,Validators.pattern(/\.(jpe?g|png|gif|bmp)$/i)]]
    }, { validators: this.checkPassword })
  }



  ngOnInit(): void {
  }

  checkPassword: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPasswordField')?.value;

    return pass === confirmPass ? null : { notSame: true }
  }

  get formControls() {
    return this.registerForm.controls;
  }

  submitForm() {
    this.registerService.postAdmin(this.registerForm.value).subscribe(message =>{
      alert(message);
    });
  }

  get notSameError() {
    return this.registerForm.errors?.['notSame'];
  }

}
