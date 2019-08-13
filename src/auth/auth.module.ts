import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Firebase and third party modules 

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2'; 
import { AngularFireAuthModule } from 'angularfire2/auth'; 
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
// shared module
import { SharedModule } from './shared/shared.module';


export const ROUTES: Routes = [
    {
        path: 'auth', 
        children : [
            { path : '', pathMatch: 'full', redirectTo: 'login'}, 
            { path : 'login', loadChildren : './login/login.module#LoginModule'},
            { path : 'register', loadChildren : './register/register.module#RegisterModule'}

        ]
    }
];

export const firebaseConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyCHyxP40Vwbg_gbyDklcF0PYW3Cb9jENdc",
    authDomain: "fitness-plan-7e9dc.firebaseapp.com",
    databaseURL: "https://fitness-plan-7e9dc.firebaseio.com",
    projectId: "fitness-plan-7e9dc",
    storageBucket: "",
    messagingSenderId: "136784777416",
  };

@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forChild(ROUTES), 
        AngularFireModule.initializeApp(firebaseConfig), 
        AngularFireAuthModule, 
        AngularFireDatabaseModule, 
        SharedModule.forRoot()
    ],
})

export class AuthModule {}