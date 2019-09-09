import { Component, OnInit } from '@angular/core';
import { appService } from '../Services/appService';
import { Router } from '@angular/router';

@Component({
    selector: 'special-user',
    templateUrl: 'SpecialUserData.component.html'
})

export class SpecialUserData {
    userData: any = [];
    dataListCheck : any = [];
    constructor(private api : appService,
                private route : Router,
                ){}

    ngOnInit(){
        this.getUserData();    
    }

    getUserData(){
        this.api.securedData().subscribe( res => {
            this.userData = res;
            console.log(this.userData);
        },err => {
            console.log(err);
        })
    }

    deleteFuntion(id){
        this.api.deleteUserData(id).subscribe(res=>{
            console.log('user deleted');
            this.getUserData();
        },err => {
            console.log(err);
        })
    }

    singleUser(itemData){
        let singleUserDetails = {
            queryParams : {
                _id: itemData._id,
                username: itemData.username,
                password: itemData.password
            }           
        }
        this.route.navigate(['/SecuredUser/SingleUser'], singleUserDetails)
        
    }
}