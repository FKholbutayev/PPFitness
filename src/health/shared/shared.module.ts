import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//third-party modules 
import { AngularFireDatabaseModule } from 'angularfire2/database'; 

//services
import { MealsService } from './services/meals/meals.service';
import { WorkoutsService } from './services/workouts/workouts.services';
import { ScheduleService } from './services/schedule/schedule.service';

// components 
import { ListItemComponent } from './component/list-item/list-item.component'

//pipes
import { JoinPipe } from './component/pipes/join.pipe';
import { WorkoutPipe } from './component/pipes/workout.pipe';

@NgModule({
    imports: [
        CommonModule, 
        RouterModule,
        AngularFireDatabaseModule
    ], 
    declarations: [
        ListItemComponent, 
        JoinPipe, 
        WorkoutPipe
    ], 
    exports: [
        ListItemComponent,
        JoinPipe, 
        WorkoutPipe
    ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule, 
            providers: [
                MealsService, 
                WorkoutsService, 
                ScheduleService
            ]
        }
    }
}