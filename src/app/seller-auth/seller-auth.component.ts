import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';
import { SellerService } from '../services/seller.service';

@Component({
    selector: 'app-seller-auth',
    templateUrl: './seller-auth.component.html',
    styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {

    showLogin = false;
    constructor(
        private seller: SellerService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.seller.reloadSeller();
    }
    
    signUp(data: SignUp): void {
        this.seller.userSignup(data);
    }

    login(data: SignUp): void {
        console.log(data);
    }

    openLogin() {
        this.showLogin = true;
    }

    openSignUp() {
        this.showLogin = false;
    }

}
