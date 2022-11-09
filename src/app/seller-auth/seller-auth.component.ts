import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login, SignUp } from '../data-type';
import { SellerService } from '../services/seller.service';

@Component({
    selector: 'app-seller-auth',
    templateUrl: './seller-auth.component.html',
    styleUrls: ['./seller-auth.component.scss'],
})
export class SellerAuthComponent implements OnInit {
    showLogin = false;
    authError: string = 'false';
    constructor(private seller: SellerService, private router: Router) { }

    ngOnInit(): void {
        this.seller.reloadSeller();
    }

    signUp(data: SignUp): void {
        console.log(data);
        this.seller.userSignup(data);
    }

    login(data: Login): void {
        this.authError = "";
        // console.log(data);
        this.seller.userLogin(data);
        this.seller.isLoginError.subscribe((isError) => {
            if (isError) {
                this.authError = "Email or Password in not Correct";
            }
        })
    }

    openLogin() {
        this.showLogin = true;
    }

    openSignUp() {
        this.showLogin = false;
    }
}
