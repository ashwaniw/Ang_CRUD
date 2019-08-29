import { Component, OnInit, Input } from '@angular/core';
import { HomeComponent } from '../Home/HomeComponent';

@Component({
    selector: 'user-details',
    templateUrl: 'userDetailscomponent.html'
})

export class UserDetails implements OnInit {

    @Input()  item : Event;

    constructor(){

    }

    ngOnInit(){

    }
}