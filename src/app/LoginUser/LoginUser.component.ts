import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { appService } from '../Services/appService';
import { Router } from '@angular/router';

@Component({
    selector: 'login-user',
    templateUrl: 'LoginUser.component.html'
})

export class LoginComponent {
    message : any;

    loginForm : FormGroup;

    constructor( private api : appService,
                 private rout: Router,
                 private fb: FormBuilder){
        this.loginForm = this.fb.group({
            username : '',
            password : ''
        })
    }

    loginUser(loginName:any){
        this.api.loginData(loginName).subscribe(res=>{
        this.message = "user logged in successfully";   
        var loginName = {}; 
        loginName = res;
        var userName = loginName['username'];
        if(userName == '' || userName == null){
            this.message = "Please enter username";
            console.log(userName);
        }else{
            localStorage.setItem('user',userName);
            this.rout.navigate(['/Home']);
        }
        
        },err=>{
            console.log(err);
        })
    }
}