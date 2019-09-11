import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { appService } from '../Services/appService';

@Component({
    selector: 'edit-user',
    templateUrl: 'editUser.component.html'
})

export class EditUser {
    message : any;
    updateError: any;
    userRecord: any = {};
    userId;

    editUserForm: FormGroup;
    constructor(private fb: FormBuilder, 
                private route : Router,
                private aRoute : ActivatedRoute,
                private api : appService) {
        this.editUserForm = this.fb.group({
            username: '',
            password: ''
        })
    }

    ngOnInit(){        
        this.aRoute.params.subscribe(params => {
            this.api.editUser(params['id']).subscribe(res => {
                this.userRecord = res;               
                this.editUserForm.setValue({
                    username: res['username'],
                    password: res['password']
                })
                this.userId = res['_id']
            })
        })
    }
    updateUser(updateUserData){
        console.log(updateUserData);
        this.message = '';
        this.updateError = '';
        if( updateUserData.value['username'] == '' || updateUserData.value['username'] == null){            
            this.updateError = "Username could not be blank";
        }else if( updateUserData.value['password'] == '' || updateUserData.value['password'] == null){
            this.updateError = "Password could not be blank";
        }else{
            var dataObjet = {
                "_id" : this.userId,
                "username" : updateUserData.value['username'],
                "password":  updateUserData.value['password']
            }
            this.api.updateUser(dataObjet).subscribe(res => {                
                this.route.navigate(['/Home']);
            },err =>{
                console.log(err);
            })
        }
    }
    goToHome(){
        this.route.navigate(['/Home']);
    }
}