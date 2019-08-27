import { Component, OnInit, OnDestroy } from "@angular/core";
import { WorkoutsService, Workout } from '../../../shared/services/workouts/workouts.services';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from 'store';

@Component({
    selector: 'workouts', 
    styleUrls: ['workouts.component.scss'], 
    template: `
        <div class="workouts">
            <div class="workouts__title">
                <h1>
                    <img src="/img/food.svg">
                    Your workouts
                </h1>
                <a 
                    class="btn__add"
                    [routerLink]="['../workouts/new']">
                    <img src="/img/add-white.svg">   
                    New workout
                </a>
            </div>
            <div *ngIf="workouts$ | async as workouts; else loading">
                <div class="message" *ngIf="!workouts.length">
                    <img src="/img/face.svg">
                    No workouts, add a new to start
                </div>
                <!-- show workouts -->
                <list-item 
                    *ngFor="let workout of workouts"
                    [item]="workout"
                    (remove)="removeWorkout($event)">
                </list-item>

            </div>
            <ng-template #loading>
                <div class="message">
                    <img src="/img/loading.svg">
                    Fetching workouts ... 
                </div>
            </ng-template>
        </div>
    `
})

export class WorkoutsComponent implements OnInit, OnDestroy {

    workouts$: Observable<Workout[]>
    subsription:Subscription
    
    constructor(
        private workoutsService:WorkoutsService,
        private store:Store, 
    ) {}
    
    removeWorkout(event:Workout) {
        this.workoutsService.removeWorkout(event.$key)
    }

    ngOnInit() {
        this.subsription = this.workoutsService.workouts$.subscribe(); 
        this.workouts$ = this.store.select<Workout[]>('workouts');

    }
    ngOnDestroy() {
        this.subsription.unsubscribe();
    }
}