import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators  } from '@angular/forms';
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
    formData : any;
    deptData: any;
    dateVa:any;
    stateData: any;

    regForm : FormGroup;    
    constructor( 
        private api : appService,
        private rout : Router,
        private form : FormBuilder){
            this.deptData = [
                "Electrical","Computer Science", "Commerce","Doctor"
            ],
            this.stateData = [
                {value: 'Andaman-and-Nicobar-Islands', viewValue: 'Andaman and Nicobar Islands'},
                {value: 'Andhra-Pradesh', viewValue: 'Andhra Pradesh'},
                {value: 'Arunachal-Pradesh', viewValue: 'Arunachal Pradesh'},
                {value: 'Assam', viewValue: 'Assam'},
                {value: 'Bihar', viewValue: 'Bihar'},
                {value: 'Chandigarh', viewValue: 'Chandigarh'},
                {value: 'Chhattisgarh', viewValue: 'Chhattisgarh'},
                {value: 'Dadra-and-Nagar-Haveli', viewValue: 'Dadra and Nagar Haveli'},
                {value: 'Daman-and-Diu', viewValue: 'Daman and Diu'},
                {value: 'Delhi', viewValue: 'Delhi'},
                {value: 'Goa', viewValue: 'Goa'},
                {value: 'Gujarat', viewValue: 'Gujarat'},
                {value: 'Haryana', viewValue: 'Haryana'},
                {value: 'Himachal-Pradesh', viewValue: 'Himachal Pradesh'},
                {value: 'Jammu-and-Kashmir', viewValue: 'Jammu and Kashmir'},                        
                {value: 'Jharkhand', viewValue: 'Jharkhand'},  
                {value: 'Karnataka', viewValue: 'Karnataka'},  
                {value: 'Kerala', viewValue: 'Kerala'},  
                {value: 'Lakshadweep', viewValue: 'Lakshadweep'},  
                {value: 'Madhya-Pradesh', viewValue: 'Madhya Pradesh'},  
                {value: 'Maharashtra', viewValue: 'Maharashtra'},  
                {value: 'Manipur', viewValue: 'Manipur'},  
                {value: 'Meghalaya', viewValue: 'Meghalaya'}, 
                {value: 'Mizoram', viewValue: 'Mizoram'}, 
                {value: 'Nagaland', viewValue: 'Nagaland'}, 
                {value: 'Orissa', viewValue: 'Orissa'}, 
                {value: 'Pondicherry', viewValue: 'Pondicherry'}, 
                {value: 'Punjab', viewValue: 'Punjab'}, 
                {value: 'Rajasthan', viewValue: 'Rajasthan'}, 
                {value: 'Sikkim', viewValue: 'Sikkim'}, 
                {value: 'Tamil-Nadu', viewValue: 'Tamil Nadu'}, 
                {value: 'Tripura', viewValue: 'Tripura'}, 
                {value: 'Uttaranchal', viewValue: 'Uttaranchal'}, 
                {value: 'Uttar-Pradesh', viewValue: 'Uttar Pradesh'}, 
                {value: 'West-Bengal', viewValue: 'West Bengal'}
            ],
        this.dateVa = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDay()); 
            
        this.regForm = this.form.group({
            username:  ['', Validators.required],
            password:  ['', [Validators.required, Validators.minLength(6)]],
            email: ['', [Validators.required, Validators.email]],
            dob: ['', Validators.required],
            dept: '',
            mobNo: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
            gender: ['', Validators.required],
            maritalStatus: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            zip: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
            regdate : new Date()
        })
    }

    ngOnInit(){

    }
    regUser(userData){
        console.log(userData);
        this.formData = userData;
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