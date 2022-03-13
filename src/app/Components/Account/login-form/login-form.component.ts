import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  token: any;
  constructor(private loginService: LoginService, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  submitForm(form: any) {
    this.loginService.adminLogin(form.value).subscribe((val: any) => {
      this.token = val.token
      this.cookieService.set('token',this.token)
      
    });
  }

}
