import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'schedule-controls', 
    styleUrls: ['schedule-controls.component.scss'], 
    template: `
        <div class="controls">
            <button 
                 type="button"
                 (click)="moveDate(offset - 1)">
                <img src="img/chevron-left.svg">
            </button>
                <p>{{selected | date: 'yMMMd'}}</p>
            <button 
                type="button"
                (click)="moveDate(offset + 1)">
                <img src="img/chevron-right.svg">
            </button>
        </div>
    `
})

export class ScheduleControlsComponent {
    @Input() 
    selected: Date;
    
    offset = 0; 

    @Output()
    move = new EventEmitter<number>(); 

    moveDate(offset:number) {
        this.offset = offset; 
        this.move.emit(offset);
    }

    constructor() {}
}