<<<<<<< HEAD
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
=======
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
>>>>>>> 50b3ecfd7687afa46ff057a2f6e596ac772d004f
}