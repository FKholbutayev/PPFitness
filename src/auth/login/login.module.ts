import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './containers/login/login.component'; 

export const ROUTES:Routes = [
    { path : '', component: LoginComponent }
]

@NgModule({
    imports: [
        CommonModule, 
        RouterModule
    ], 
    providers: [], 
    declarations: [
        LoginComponent
    ]
})

export class LoginModule {}