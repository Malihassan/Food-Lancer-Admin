import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  token : any;
  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
  }

  submitForm(form: any){
    this.loginService.adminLogin(form.value).subscribe(message =>{
      console.log(message);
    });
  }

}
