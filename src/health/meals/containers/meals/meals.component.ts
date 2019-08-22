import { Component, OnInit, OnDestroy } from "@angular/core";
import { MealsService, Meal } from '../../../shared/services/meals/meals.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from 'store';

@Component({
    selector: 'meals', 
    styleUrls: ['meals.component.scss'], 
    template: `
        <div class="meals">
            <div class="meals__title">
                <h1>
                    <img src="/img/food.svg">
                    Your meals
                </h1>
                <a 
                    class="btn__add"
                    [routerLink]="['../meals/new']">
                    <img src="/img/add-white.svg">   
                    New meal
                </a>
            </div>
            <div *ngIf="meals$ | async as meals; else loading">
                <div class="message" *ngIf="!meals.length">
                    <img src="/img/face.svg">
                    No meals, add a new to start
                </div>
                <!-- show meals -->
                <list-item 
                    *ngFor="let meal of meals"
                    [item]="meal"
                    (remove)="removeMeal($event)">
                </list-item>

            </div>
            <ng-template #loading>
                <div class="message">
                    <img src="/img/loading.svg">
                    Fetching meals ... 
                </div>
            </ng-template>
        </div>
    `
})

export class MealsComponent implements OnInit, OnDestroy {

    meals$: Observable<Meal[]>
    subsription:Subscription
    
    constructor(
        private mealsService:MealsService,
        private store:Store, 
    ) {}
    
    removeMeal(event:Meal) {
        this.mealsService.removeMeal(event.$key)
        console.log("meal remove", event)
    }

    ngOnInit() {
        this.subsription = this.mealsService.meals$.subscribe(); 
        this.meals$ = this.store.select<Meal[]>('meals');

    }
    ngOnDestroy() {
        this.subsription.unsubscribe();
    }
}