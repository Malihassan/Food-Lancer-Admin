import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
// import { ShareModule } from '../shared/module/share/share.module';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, empty, finalize, map, Observable, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(
    private spinnerService: NgxSpinnerService,
    private cookieService: CookieService,
    private _router: Router
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
    return next
      .handle(authReq)
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';          
          if (error.status == 401) {
            errorMsg = error.message;
            this._router.navigate(['/account/login']);
            console.log(token)
          }
          return throwError(error);
        })
      )
      .pipe(
        finalize(() => {
          this.spinnerService.hide();
        })
      );
  }
}
