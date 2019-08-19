import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';

import { Store } from 'store';
import { AuthService } from '../../../../auth/shared/services/auth/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do'

export interface Meal {
    name:string, 
    ingredients:string[], 
    timestamp: number, 
    
    //firebase related
    $key:string, 
    $exists: () => boolean
}

@Injectable()

export class MealsService {

    meals$: Observable<Meal[]> = this.db.list(`meals/${this.uid}`)
        .do(next => this.store.set('meals', next));

    constructor(
        private store:Store, 
        private db: AngularFireDatabase, 
        private authService:AuthService
    ) {}

    get uid() {
        return this.authService.user.uid
    }
}