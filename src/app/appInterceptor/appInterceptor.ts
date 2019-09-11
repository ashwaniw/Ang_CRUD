<<<<<<< HEAD
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class ErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(catchError((error: HttpErrorResponse) => {
                let errorMessage = "";
                errorMessage = "Service url is icorrect!!!";
                return throwError(errorMessage);
            })
        )
    }
=======
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class ErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(catchError((error: HttpErrorResponse) => {
                let errorMessage = "";
                errorMessage = "Service url is icorrect!!!";
                return throwError(errorMessage);
            })
        )
    }
>>>>>>> 50b3ecfd7687afa46ff057a2f6e596ac772d004f
}