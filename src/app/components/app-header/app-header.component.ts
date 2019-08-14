import { Component, Output, EventEmitter, Input } from "@angular/core";
import { User } from 'firebase/app';

@Component({
    selector: 'app-header', 
    styleUrls: ['./app-header.component.scss'],
    template: `
        <div class="app-header">
            <div class="wrapper">
                <img src="/img/logo.svg">
                    <div class="app-header__user-info"
                        *ngIf="user?.authenticated">
                        <span (click)="logoutUser()"></span>
                    </div>
            </div>
        
        </div>
    `
    
})

export class AppHeaderComponent {
    @Input()
    user:User

    @Output()
    logout = new EventEmitter<any>(); 
    
    logoutUser() {
        this.logout.emit();
    }
    constructor() {}
}