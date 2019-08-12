import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from '../auth/auth.module'

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES), 
    AuthModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/*
  var firebaseConfig = {
    apiKey: "AIzaSyCHyxP40Vwbg_gbyDklcF0PYW3Cb9jENdc",
    authDomain: "fitness-plan-7e9dc.firebaseapp.com",
    databaseURL: "https://fitness-plan-7e9dc.firebaseio.com",
    projectId: "fitness-plan-7e9dc",
    storageBucket: "",
    messagingSenderId: "136784777416",
    appId: "1:136784777416:web:773fc348be2a5ddb"
  };
*/