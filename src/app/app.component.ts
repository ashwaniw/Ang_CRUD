import { Component, OnInit  }from '@angular/core';
import { appService } from '../app/Services/appService';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppCoponent implements OnInit {
    checkUser = false;
    constructor (private api: appService){
        
    }
    title =  'Auth Guard';
    loginName: any;

    ngOnInit(){                  
    }

    ngDoCheck(){
        var loginName = localStorage.getItem('user');    
        this.loginName = loginName; 
    }
    logOut(){
        localStorage.removeItem('user');        
    }   
}