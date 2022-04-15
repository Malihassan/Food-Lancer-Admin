import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  token: any;
  constructor(
    private loginService: LoginService,
    private cookieService: CookieService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  submitForm(form: any) {
    this.loginService.adminLogin(form.value).subscribe((message: any) => {
      this.token = message.token;
      this.cookieService.set('userName', message.userName, {
        expires: new Date(new Date().getTime() + 1000 * 60 * 60 * 24),
      });
      this.cookieService.set('adminToken', this.token, {
        expires: new Date(new Date().getTime() + 1000 * 60 * 60 * 24),
      });
      window.location.reload();
    });
  }
}
