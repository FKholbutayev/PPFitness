import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from 'rxjs/Observable';

//services 
import { ScheduleService, ScheduleItem } from '../../../shared/services/schedule/schedule.service';
import { Store } from 'store';
import { Subscription } from 'rxjs/Subscription';
import { Workout, WorkoutsService } from '../../../shared/services/workouts/workouts.services';
import { Meal, MealsService } from '../../../shared/services/meals/meals.service';


@Component({
    selector: 'schedule', 
    styleUrls: ['schedule.component.scss'], 
    template: `
        <div class="schedule">
            <schedule-calendar
                [date]="date$ | async"
                [items]="schedule$ | async"
                (change)="changeDate($event)"
                (select)="changeSection($event)">
            </schedule-calendar>

            <schedule-assign
                *ngIf="open"
                [section]="selected$ | async"
                [list]="list$ | async"
                (update)="assignItem($event)"
                (cancel)="closeAssign($event)">
            </schedule-assign>

        </div>
    `
})

export class ScheduleComponent implements OnInit, OnDestroy {
    
    open = false; 
    
    date$:Observable<Date>; 
    selected$:Observable<any>;
    list$:Observable<Meal[] | Workout[]>;
    subsriptions:Subscription[] = [];
    schedule$:Observable<ScheduleItem[]>;
    
    constructor(
        private scheduleService:ScheduleService, 
        private mealsService:MealsService, 
        private workoutsService:WorkoutsService,
        private store:Store) {

    }

    ngOnInit() {
        this.date$ = this.store.select('date');
        this.schedule$ = this.store.select('schedule');
        this.selected$ = this.store.select('selected'); 
        this.list$ = this.store.select('list');
        
        this.subsriptions = [
            this.scheduleService.schedule$.subscribe(),
            this.scheduleService.selected$.subscribe(), 
            this.scheduleService.list$.subscribe(), 
            this.scheduleService.items$.subscribe(), 
            this.mealsService.meals$.subscribe(), 
            this.workoutsService.workouts$.subscribe()
        ]    
    }

    changeDate(date:Date) {
        console.log("change date", date);
        this.scheduleService.updateDate(date); 

    }

    closeAssign() {
        this.open = false; 
    }

    assignItem(items:string[]){
        console.log("assign items", items); 
        this.scheduleService.updateItems(items);
        this.closeAssign(); 
    }

    changeSection(event:any) {
        console.log("log out", event)
        this.open = true;
        this.scheduleService.selectSection(event);
    }

    ngOnDestroy() {
        this.subsriptions.forEach(sub => sub.unsubscribe());
    }
}