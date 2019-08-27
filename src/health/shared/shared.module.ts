import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//third-party modules 
import { AngularFireDatabaseModule } from 'angularfire2/database'; 

//services
import { MealsService } from './services/meals/meals.service';
import { WorkoutsService } from './services/workouts/workouts.services';

// components 
import { ListItemComponent } from './component/list-item/list-item.component'

@NgModule({
    imports: [
        CommonModule, 
        RouterModule,
        AngularFireDatabaseModule
    ], 
    declarations: [
        ListItemComponent
    ], 
    exports: [
        ListItemComponent
    ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule, 
            providers: [
                MealsService, 
                WorkoutsService
            ]
        }
    }
}