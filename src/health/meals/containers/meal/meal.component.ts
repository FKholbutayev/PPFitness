import { Component, OnInit, OnDestroy } from '@angular/core';
import { Meal, MealsService } from '../../../shared/services/meals/meals.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/switchMap'

@Component({
    selector: 'meal', 
    styleUrls: ['meal.component.scss'], 
    template: `
        <div class="meal">
            <div class="meal__title">
                <h1>
                    <img src="/img/food.svg">
                    <span *ngIf="meal$ | async as meal; else title">
                        {{meal.name ? 'Edit' : 'Create'}} meal
                    </span>
                    <ng-template #title>
                        ...Loading
                    </ng-template>
                </h1>
            </div>
            <div *ngIf="meal$ | async as meal; else loading">
                <meal-form 
                    [meal]="meal"
                    (create)="addMeal($event)"
                    (update)="updateMeal($event)"
                    (remove)="removeMeal($event)">
                </meal-form>
            </div>
            <ng-template #loading>
                <div class="message">
                    <img src="/img/loading.svg">
                    Fetching meal ...
                </div>
            </ng-template>
        </div>
    `
})

export class MealComponent implements OnInit, OnDestroy {
    
    meal$: Observable<Meal>; 
    subsription:Subscription
    
    constructor(
        private mealsService: MealsService, 
        private router:Router, 
        private route: ActivatedRoute
    ) {}
    
    ngOnInit() {
        this.subsription = this.mealsService.meals$.subscribe(); 
        this.meal$ = this.route.params
            .switchMap(param=> {
                return this.mealsService.getMeal(param.id);
            })
    }

    ngOnDestroy() {
        this.subsription.unsubscribe();
    }

    async addMeal(event:Meal) {
        console.log("meal", event);
        await this.mealsService.addMeal(event)
        this.backToMeals(); 

    }

    updateMeal(event:Meal) {
        
    }

    removeMeal(event:Meal) {

    }

    backToMeals() {
        this.router.navigate(['meals']);
    }
}