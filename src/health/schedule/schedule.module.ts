import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// to use pipe join on schedule-section
import { SharedModule } from '../shared/shared.module'

//containers
import { ScheduleComponent } from './containers/schedule/schedule.component';
import { ScheduleControlsComponent } from './components/schedule-controls/schedule-controls.components';
import { ScheduleDaysComponent } from './components/schedule-days/schedule-days.component';
import { ScheduleCalendarComponent } from './components/schedule-calendar/schedule-calendar.component';
import { ScheduleSectionComponent } from './components/schedule-section/schedule-section.component';

export const ROUTES:Routes = [
    { path : '', component: ScheduleComponent }
]

@NgModule({
    imports: [
        CommonModule, 
        ReactiveFormsModule, 
        RouterModule.forChild(ROUTES), 
        SharedModule
    ], 
    declarations: [
        ScheduleComponent, 
        ScheduleCalendarComponent,
        ScheduleDaysComponent, 
        ScheduleControlsComponent,
        ScheduleSectionComponent
    ], 
   
})

export class ScheduleModule {}