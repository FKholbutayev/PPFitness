import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from 'rxjs/Observable';

//services 
import { ScheduleService, ScheduleItem } from '../../../shared/services/schedule/schedule.service';
import { Store } from 'store';
import { Subscription } from 'rxjs/Subscription';


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

            <schedule-assign>
            </schedule-assign>

        </div>
    `
})

export class ScheduleComponent implements OnInit, OnDestroy {
    
    date$:Observable<Date>; 
    subsriptions:Subscription[] = []
    schedule$:Observable<ScheduleItem[]>
    
    constructor(
        private scheduleService:ScheduleService, 
        private store:Store) {

    }

    ngOnInit() {
        this.date$ = this.store.select('date');
        this.schedule$ = this.store.select('schedule');
        
        this.subsriptions = [
            this.scheduleService.schedule$.subscribe(),
            this.scheduleService.selected$.subscribe()
        ]    
    }

    changeDate(date:Date) {
        console.log("change date", date);
        this.scheduleService.updateDate(date); 

    }

    changeSection(event:any) {
        console.log("log out", event)
        this.scheduleService.selectSection(event);
    }

    ngOnDestroy() {
        this.subsriptions.forEach(sub => sub.unsubscribe());
    }
}