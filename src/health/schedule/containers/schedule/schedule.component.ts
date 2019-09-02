import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from 'rxjs/Observable';

//services 
import { ScheduleService } from '../../../shared/services/schedule/schedule.service';
import { Store } from 'store';
import { Subscription } from 'rxjs/Subscription';


@Component({
    selector: 'schedule', 
    styleUrls: ['schedule.component.scss'], 
    template: `
        <div class="schedule">
            <schedule-calendar
                [date]="date$ | async"
                (change)="changeDate($event)">
            
            </schedule-calendar>
        </div>
    `
})

export class ScheduleComponent implements OnInit, OnDestroy {
    
    date$:Observable<Date>; 
    subsriptions:Subscription[] = []
    
    constructor(
        private scheduleService:ScheduleService, 
        private store:Store) {

    }

    ngOnInit() {
        this.date$ = this.store.select('date')
        this.subsriptions = [
            this.scheduleService.schedule$.subscribe()
        ]    
    }

    changeDate(date:Date) {
        console.log("change date", date);
        this.scheduleService.updateDate(date); 

    }

    ngOnDestroy() {
        this.subsriptions.forEach(sub => sub.unsubscribe());
    }
}