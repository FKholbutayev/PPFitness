import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';


export const ROUTES:Routes = [
    { path: 'meals', loadChildren: './meals/meals.module#MealsModule' }
]

@NgModule({
    imports: [
        RouterModule
    ]
})

export class HealthModule {

}