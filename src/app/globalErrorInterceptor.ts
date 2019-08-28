import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { observable, throwError } from 'rxjs';
import { catchError } from  'rxjs/operators';

/*export class HtttpErrorInterceptor implements HttpInterceptor {
    
}*/