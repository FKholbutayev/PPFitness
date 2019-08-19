import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable'; 
import { Subscription } from 'rxjs/Subscription'

import { Store } from 'store';
import { AuthService } from '../../../auth/shared/services/auth/auth.service';
import { User } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <app-header
        [user] = "user$ | async"
        (logout)="onLogout()">
      
      </app-header>

      <app-nav *ngIf="(user$|async)?.authenticated">
      
      </app-nav>
      
        <div class="wrapper">
          <router-outlet></router-outlet>
        </div>
    </div>
  `
})
export class AppComponent implements OnInit, OnDestroy {

  user$:Observable<User>; 
  subsription:Subscription

  constructor(
    private store:Store, 
    private authService:AuthService, 
    private router:Router
  ) {}

  ngOnInit() {
    this.subsription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user')
  }

  ngOnDestroy() {
    this.subsription.unsubscribe();
  }

  async onLogout() {
    await this.authService.logoutUser(); 
    this.router.navigate(['/auth/login']);
  }
}
