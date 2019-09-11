import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { appService } from '../Services/appService';

@Injectable()

export class appAuthGuard implements CanActivate{
    constructor(
        private rout : Router,
        private api : appService
    ){

    }
    canActivate() : boolean {
        if(this.api.loggedIn()){
            return true;
        }else{
            this.rout.navigate(['/Login']);
            return false;
        }
    }
}