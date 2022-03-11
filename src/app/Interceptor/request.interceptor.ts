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
  constructor(private spinnerService: NgxSpinnerService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authReq = request.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Ik5ld0FkbWluMi0xIiwiaWQiOiI2MjEyOGM1NzU1ZmM1ODE1MjMwYjg5NDYiLCJpYXQiOjE2NDY5ODY4NDgsImV4cCI6MTY0NzA3MzI0OH0.az2Vn5EPiHuFSljxaVEqT_xRStEmL9UTgiNMjKFPu0k',
      }),
    });
    this.spinnerService.show();
    return next.handle(authReq).pipe(
      finalize(() => {
        this.spinnerService.hide();
      })
    );
  }
}
