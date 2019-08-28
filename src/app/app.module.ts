import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppCoponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


import { RegisterUser } from './RegisterUser/RegisterUser.component';
import { LoginComponent } from './LoginUser/LoginUser.component';
import { HomeComponent } from './Home/HomeComponent';
import { appService } from './Services/appService';
import { appAuthGuard } from '../app/AuthGuard/AuthGuard';
import { ErrorInterceptor } from './appInterceptor/appInterceptor';
import { EditUser } from '../app/editUser/editUser.component';

const appRoutes : Routes = [
    { path: "", redirectTo: 'Login', pathMatch: 'full'},
    { path: 'Login', component: LoginComponent },    
    { path: 'SignUp', component: RegisterUser},
    { path: 'Home', canActivate: [appAuthGuard], component: HomeComponent},
    { path: 'Home/Edit/:id', component: EditUser},
    { path: '**', component: LoginComponent}
]

@NgModule ({
    imports: [
        BrowserModule,        
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxPaginationModule
    ],
    declarations: [
        AppCoponent, 
        LoginComponent, 
        RegisterUser,
        HomeComponent,
        EditUser        
    ],
    providers: [
        appService,
        appAuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppCoponent]
})

export class AppModule {}