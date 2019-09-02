import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'schedule-calendar', 
    styleUrls: ['schedule-calendar.component.scss'], 
    template: `
        <div class="calendar">
            <schedule-controls
                [selected]="selectedDay"
                (move)="onChange($event)">
            
            </schedule-controls>
        </div>
    `
})

export class ScheduleCalendarComponent {
    selectedDay:Date
    
    @Output()
    change = new EventEmitter<Date>(); 

    @Input()
    set date(date: Date) {
        this.selectedDay = new Date(date.getTime()); 
    } 

    onChange(weekOffset:number) {
        const startOfWeek = this.getStartOfWeek(new Date());
        const startDate = (
            new Date(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate())
        )
        startDate.setDate(startDate.getDate() + (weekOffset * 7))
        this.change.emit(startDate);
    }

    private getStartOfWeek(date:Date) {
        const day = date.getDate(); 
        const diff = date.getDate() - day + (day === 0 ? -6 : 1); 
        return new Date(date.setDate(diff));
    }


    

    constructor() {}
}