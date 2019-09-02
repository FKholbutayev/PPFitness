import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Store } from 'store';
import { Observable } from 'rxjs/Observable';

@Injectable() 
export class ScheduleService {

    private date$ = new BehaviorSubject(new Date()); 

    schedule$: Observable<Date> = this.date$
        .do((next) => this.store.set('date', next))
    
    constructor(
        private store:Store) {}

    updateDate(date:Date) {
        this.date$.next(date);
    }
}