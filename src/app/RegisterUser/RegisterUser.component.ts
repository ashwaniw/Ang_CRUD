import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { appService } from '../Services/appService';
import { Router } from '@angular/router';

@Component ({
    selector: 'register-user',
    templateUrl: 'RegisterUser.component.html'
})

export class RegisterUser implements OnInit {
    regFormValue: any;
    regError: any;
    message: any;

    regForm : FormGroup;    
    constructor( 
        private api : appService,
        private rout : Router,
        private form : FormBuilder){
        this.regForm = this.form.group({
            username: '',
            password: ''
        })
    }

    ngOnInit(){

    }
    regUser(userData){
        this.message=""; 
        this.regError ="";  
        if( userData['username'] == '' || userData['username'] == null){
            this.regError = "Please enter username";
        } else if( userData['password'] == '' || userData['password'] == null){
            console.log("in elseif");
            console.log(userData);
            this.regError = "Plese enter password";                  
        } else {            
            this.api.postData(userData).subscribe(response=>{
                this.message = "User successfully registered!"; 
                this.rout.navigate(['/Login']);
            },err =>{
                console.log(err);  
                this.regError =err.error ;              
            })
        }
    }

}