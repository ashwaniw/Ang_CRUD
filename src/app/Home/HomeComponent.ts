import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appService } from '../Services/appService';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: 'HomeComponent.html'
})

export class HomeComponent implements OnInit{

    userData: any = [];
    dataListCheck = false;
    errorMessage : any;
    userDetails: any ;
    userDetailsArray : any;
    constructor( 
        private http: HttpClient,
        private api : appService,
        private route : Router
        ){
        
    }
    
    ngOnInit(){
        this.getUserData();
    }
    
    getUserData(){
        this.api.getData().subscribe(res=>{
            this.userData = res;
            this.dataListCheck = true;
        },err=>{
            console.log(err);
            this.errorMessage = 'Data is not available !!!'
        })
    }

    deleteUser(id){                
        this.api.deleteUserData(id).subscribe ( res => {
            console.log('user deleted');
            this.getUserData();
        },err => {
            console.log(err);
        })        
    }

    deleteFuntion(id){
        var del = confirm('Are you sure ? you want to delete this user ?');
        if(del == true){
            this.deleteUser(id);
        }
    }
    
    viewUserDetails(userDetails){
       // console.log(userDetails);
        let navigateExtra = {
            queryParams : {
                _id:userDetails._id,
                username:userDetails.username,
                password:userDetails.password
            }
        }
        this.route.navigate(['/Home/UserDetals'],navigateExtra);

    }

}