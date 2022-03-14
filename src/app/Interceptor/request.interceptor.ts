import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CookieService } from 'ngx-cookie-service';

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
  constructor(
    private spinnerService: NgxSpinnerService,
    private cookieService: CookieService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.cookieService.get('token');
    const authReq = request.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token,
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
