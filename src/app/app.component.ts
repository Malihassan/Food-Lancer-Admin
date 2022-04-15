import { Observable, of } from 'rxjs';
import { Component, SimpleChanges } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'food-lancer-admin';
  status: boolean = false;
  pageNotFounded: any;
  userName: string = '';
  authenticated: boolean = this.cookieService.get('adminToken') ? true : false;
  
  constructor(
    private cookieService: CookieService,
    private loginService: LoginService
  ) {}
  ngOnInit(): void {    
    this.loginService.getisFoundValue().subscribe((res) => {
      this.pageNotFounded = res;
    });
  }
  addItem(newItem: boolean) {
    this.status = newItem;
  }
  userNameValue(value: any) {
    this.userName = value;
  }
}
