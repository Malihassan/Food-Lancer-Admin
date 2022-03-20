import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
})
export class NotFoundPageComponent implements OnInit ,OnDestroy {
  constructor(private loginService: LoginService) {
    this.loginService.setisFoundValue(false);
  }

  ngOnInit(): void {
    // this.loginService.setisFoundValue(false);

  }
  ngOnDestroy(): void {
    // this.loginService.setisFoundValue(false);
    console.log('OnDistroy');
    
  }
}
