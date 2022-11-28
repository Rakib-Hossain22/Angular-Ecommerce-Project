import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    userSignUp(user: SignUp) {
        this.http.post('http://localhost:3000/users', user, { observe: 'response' })
            .subscribe((result) => {
                if (result) {
                    localStorage.setItem('users', JSON.stringify(result.body));
                    this.router.navigate(['/']);
                }
            });
    }
}
