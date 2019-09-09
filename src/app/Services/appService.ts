import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class appService {
    constructor( private http: HttpClient){        
    }

    postData(userData){
        return this.http.post('http://localhost:5300/savemember',userData);
    }

    loginData(loginName){
        return this.http.post('http://localhost:5300/login',loginName);
    }

// ERROR HANDLING AT SERVICE LEVEL
   /* getData(){
        return this.http.get('http://localhost:5300/fetchdata').pipe(catchError(this.errorDisplay));
    }*/
// ERROR HANDLING GLOBALY USING HTTP_INTERCEPTOR

// ERROR HANDLING AT SERVICE LEVEL
/*    errorDisplay(error){
        let errorMessage = '';
        errorMessage = "Some error occured, check service " + error.message;
        return throwError(errorMessage);
    }   */

    getData(){
        return this.http.get('http://localhost:5300/fetchdata');
    }
    
    securedData(){        
        return this.http.get('http://localhost:5300/secured');
    }

    loggedIn(){
        return !!localStorage.getItem('user');
    }
    
    logOut(){
        return localStorage.removeItem('user');
    }

    deleteUserData(id){
        return this.http.delete('http://localhost:5300/delete/'+id);
    }

    editUser(id){        
        return this.http.get('http://localhost:5300/edit/'+ id);
    }

    updateUser(data){        
        return this.http.put('http://localhost:5300/updateUser/'+ data._id, data);

    }
   
}