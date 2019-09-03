import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from "@angular/core";
import { ScheduleItem, ScheduleList } from '../../../shared/services/schedule/schedule.service';

@Component({
    selector: 'schedule-calendar', 
    styleUrls: ['schedule-calendar.component.scss'], 
    template: `
        <div class="calendar">
            <schedule-controls
                [selected]="selectedDay"
                (move)="onChange($event)">
            </schedule-controls>

            <schedule-days
                [selected]="selectedDayIndex"
                (select)="selectDay($event)">
            </schedule-days>
        </div>
    `
})

export class ScheduleCalendarComponent implements OnChanges {
       
    selectedDayIndex:number; 
    selectedDay:Date;
    selectedWeek: Date; 

    sections = [
        { key:'morning', name: 'Morning'},
        { key:'lunch', name: 'Lunch'},
        { key:'evening', name: 'Evening'},
        { key:'snacks', name: 'Snacks and Drinks'}
    ]; 

    @Output()
    change = new EventEmitter<Date>(); 

    @Input()
    set date(date: Date) {
        this.selectedDay = new Date(date.getTime()); 
    }
    
    @Input()
    items: ScheduleList

    onChange(weekOffset:number) {
        const startOfWeek = this.getStartOfWeek(new Date());
        const startDate = (
            new Date(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate())
        )
        startDate.setDate(startDate.getDate() + (weekOffset * 7))
        this.change.emit(startDate);
    }
    
    private getStartOfWeek(date:Date) {
        const day = date.getDay(); 
        const diff = date.getDate() - day + (day === 0 ? -6 : 1); 
        return new Date(date.setDate(diff));
    }

    ngOnChanges(changes:SimpleChanges) {
        this.selectedDayIndex = this.getToday(this.selectedDay)
        this.selectedWeek = this.getStartOfWeek(new Date(this.selectedDay))
    }

    getSection(name:string): ScheduleItem {
        return this.items && this.items[name] || {}; 
    }

    getToday(date:Date) {
        let today = date.getDay() - 1;
 
        if(today < 0) {
            today = 6
        }
        return today
    }

    selectDay(index : number) {
        const selectedDay = new Date(this.selectedWeek); 
        selectedDay.setDate(selectedDay.getDate() + index); 
        this.change.emit(selectedDay)
    }

    constructor() {}
}