import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'food-lancer-admin';
  status: boolean = false;
  authenticated: boolean = this.cookieService.get('token') ? true : false
  constructor(private cookieService: CookieService) {
    // this.authenticated = 
  }
  addItem(newItem: boolean) {
    this.status = newItem;
  }
}
