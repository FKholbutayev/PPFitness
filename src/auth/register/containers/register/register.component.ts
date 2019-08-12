import { Component } from '@angular/core';


@Component({
    selector: 'login',
    template: `
    <div>
        <auth-form>
            <h1>Register<h1>
            <a routerLink="/auth/login">Already have an account?</a>
            <button type="submit">Create account</button>
        </auth-form>
    </div>
    `
})

export class RegisterComponent {
    constructor() { }
}