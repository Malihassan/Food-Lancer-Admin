import {
  Component,
  OnInit,
  Inject,
  HostListener,
  ViewChild,
} from '@angular/core';
// import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss'],
})
export class OrdersPageComponent implements OnInit {
  @ViewChild('ordersPage') div: any;
  ngAfterViewInit() {
    console.log(this.div.nativeElement);
  }
  // windowScrolled: any;
  orders: any = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  // constructor(@Inject(DOCUMENT) private document: Document) {}
  constructor() {}
  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   if (
  //     window.pageYOffset ||
  //     document.documentElement.scrollTop ||
  //     document.body.scrollTop > 100
  //   ) {
  //     this.windowScrolled = true;
  //   } else if (
  //     (this.windowScrolled && window.pageYOffset) ||
  //     document.documentElement.scrollTop ||
  //     document.body.scrollTop < 10
  //   ) {
  //     this.windowScrolled = false;
  //   }
  // }
  // scrollToTop() {
  //   (function smoothscroll() {
  //     var currentScroll =
  //       document.documentElement.scrollTop || document.body.scrollTop;
  //     if (currentScroll > 0) {
  //       window.requestAnimationFrame(smoothscroll);
  //       window.scrollTo(0, currentScroll - currentScroll / 8);
  //     }
  //   })();
  // }

  scrollToTop() {
    this.div.nativeElement.scrollTop = 0;
  }

  ngOnInit(): void {}
}
