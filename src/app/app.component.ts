import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'food-lancer-admin';
  status:boolean=false;
  addItem(newItem: boolean) {
    this.status=newItem;
  }
}
