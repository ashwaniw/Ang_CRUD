import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { appService } from '../Services/appService';

@Injectable()

export class TokenInterceptorService implements HttpInterceptor {
    constructor(private api : appService ){}

    intercept(req, next){
        let tokenizedReq = req.clone ({
            setHeaders : {
                Authorization : 'Bearer' + this.api.loggedIn()
            } 
        })
        return next.handle(tokenizedReq);
    }
}