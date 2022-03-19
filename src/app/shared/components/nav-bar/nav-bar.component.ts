import { LoginService } from 'src/app/services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<boolean>();
  constructor(private cookieService: CookieService,private serviceLogin:LoginService) { }
  status: boolean = true;
  clickEvent(){
    this.newItemEvent.emit(this.status);
    this.status = !this.status;   
}
  ngOnInit(): void {
  }
  handelLogout(){
    this.serviceLogin.adminLogout().subscribe((res=>{
      console.log('Logout Subscribee');
      this.cookieService.set('token', '', { expires: new Date(new Date().getTime() -  1000 * 60 * 60 * 24) });
      window.location.reload();
    }));
  }

}

