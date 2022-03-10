import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private spinnerService: NgxSpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authReq=request.clone(
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'my-auth-token',
          }),
      }
    )
    this.spinnerService.show();
    return next.handle(authReq).pipe(finalize(()=>{
      this.spinnerService.hide();
    }));
  }
}
