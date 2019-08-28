import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

//containers
import { ScheduleComponent } from './containers/schedule/schedule.component';
import { ScheduleControlsComponent } from './components/schedule-controls/schedule-controls.components';
import { ScheduleDaysComponent } from './components/schedule-days/schedule-days.component';
import { ScheduleCalendarComponent } from './components/schedule-calendar/schedule-calendar.component';

export const ROUTES:Routes = [
    { path : '', component: ScheduleComponent }
]

@NgModule({
    imports: [
        CommonModule, 
        ReactiveFormsModule, 
        RouterModule.forChild(ROUTES)
    ], 
    declarations: [
        ScheduleComponent, 
        ScheduleControlsComponent,
        ScheduleDaysComponent, 
        ScheduleCalendarComponent
    ], 
   
})

export class ScheduleModule {}