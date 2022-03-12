import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private spinnerService: NgxSpinnerService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authReq = request.clone(
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Ik5ld0FkbWluMi0xIiwiaWQiOiI2MjEyOGM1NzU1ZmM1ODE1MjMwYjg5NDYiLCJpYXQiOjE2NDcwNzI1ODUsImV4cCI6MTY0NzE1ODk4NX0.SA1A0Tz4jSWuEtPLtKnJvq3Ek1CTnBhVtjbF3k2N0iA',
        }),
      }
    )
    this.spinnerService.show();
    return next.handle(authReq).pipe(finalize(() => {
      this.spinnerService.hide();
    }));
  }
}
