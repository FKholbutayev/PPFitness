import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/auth/shared/services/auth/auth.service';


@Component({
    selector: 'login',
    template: `
    <div>
        <auth-form (submitted)="registerUser($event)">
          <h1>Register</h1>
          <a routerLink="/auth/login">Already have an account?</a>
          <button type="submit">
            Create Account
          </button>

          <div class="error" *ngIf="error">
            {{ error }}
          </div>

        </auth-form>
    </div>
    `
})

export class RegisterComponent {
    error:string
    
    constructor(
      private authService:AuthService
    ) { }
    
    async registerUser(event:FormGroup) {
      const { email, password } = event.value
      try {
        await this.authService.createUser(email, password)
      } catch (err) {
        this.error = err.message; 
      }
      
        
    }

}