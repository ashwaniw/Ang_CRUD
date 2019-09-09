import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'single-user',
 templateUrl: 'SingleUser.html'
})

export class SingleUser implements OnInit {
    singleUser = {};
    constructor(private aRoute : ActivatedRoute){
        this.aRoute.queryParams.subscribe(params =>{
            this.singleUser = params;            
        })
    }

    ngOnInit(){

    }
}
