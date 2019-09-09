import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'user-details',
    templateUrl: 'userDetailscomponent.html'
})

export class UserDetails implements OnInit {
    item = {};

constructor(private route : ActivatedRoute){
        this.route.queryParams.subscribe( params =>{            
            this.item = params
        })
    }

    ngOnInit(){ 
    
    }
}