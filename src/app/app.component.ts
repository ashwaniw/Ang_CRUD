import { Component  }from '@angular/core';
import { appService } from '../app/Services/appService';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppCoponent {
    constructor (private api: appService){
    }
    title =  'Auth Guard';

    logOut(){
        localStorage.removeItem('user');
    }
}