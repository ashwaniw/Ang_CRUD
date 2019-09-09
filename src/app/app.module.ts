import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppCoponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDatepickerModule, MatFormFieldModule, 
    MatInputModule,MatNativeDateModule,MatRadioModule,MatOptionModule,MatSelectModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RegisterUser } from './RegisterUser/RegisterUser.component';
import { LoginComponent } from './LoginUser/LoginUser.component';
import { HomeComponent } from './Home/HomeComponent';
import { appService } from './Services/appService';
import { appAuthGuard } from '../app/AuthGuard/AuthGuard';
import { ErrorInterceptor } from './appInterceptor/appInterceptor';
import { EditUser } from '../app/editUser/editUser.component';
import { UserDetails } from '../app/UserDetails/userDetailscomponent';
//import { TokenInterceptorService } from '../app/TokenAuthentication/TokenAuthentication';
import { SpecialUserData } from '../app/SpecialUserData/SpecialUserData.component';
import { SingleUser } from '../app/SingleUser/SingleUser';
import { MyPipePipe } from './my-pipe.pipe';
import { CustomDirectiveDirective } from './custom-directive.directive';

const appRoutes : Routes = [
    { path: "", redirectTo: 'Home', pathMatch: 'full'},
    { path: 'Login', component: LoginComponent },    
    { path: 'SignUp', component: RegisterUser},
    { path: 'Home', canActivate: [appAuthGuard], component: HomeComponent},
    { path: 'Home/Edit/:id', component: EditUser},
    { path: 'SecuredUser', component: SpecialUserData},
    { path: 'SecuredUser/SingleUser', component: SingleUser},
    { path: 'Home/UserDetals', component: UserDetails},
    { path: '**', component: LoginComponent}
]

@NgModule ({
    imports: [
        BrowserModule,        
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxPaginationModule,
        MatDatepickerModule,
        MatFormFieldModule, 
        MatInputModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
        MatRadioModule,
        MatOptionModule,
        MatSelectModule,
        
    ],
    exports : [
        MatDatepickerModule,
        MatFormFieldModule, 
        MatInputModule,
        MatNativeDateModule,
        
    ],
    declarations: [
        AppCoponent, 
        LoginComponent, 
        RegisterUser,
        HomeComponent,
        EditUser,
        UserDetails,
        SpecialUserData,
        SingleUser,
        MyPipePipe,
        CustomDirectiveDirective    
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