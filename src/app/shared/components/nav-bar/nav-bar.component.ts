import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<boolean>();
  constructor() { }
  status: boolean = true;
  clickEvent(){
    this.newItemEvent.emit(this.status);
    console.log("clicked");
    this.status = !this.status;       
}
  ngOnInit(): void {
  }

}

