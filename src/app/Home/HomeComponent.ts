import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appService } from '../Services/appService';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
    selector: 'home',
    templateUrl: 'HomeComponent.html'
})

export class HomeComponent implements OnInit{

    @Output() eventClicked = new EventEmitter<Event>();

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

    viewUserDetails(userDetails): void{        
        this.eventClicked.emit(userDetails);
        this.route.navigate(['/Home/UserDetals']);
        this.userDetailsArray = userDetails;
        console.log(this.userDetailsArray);
    }
}