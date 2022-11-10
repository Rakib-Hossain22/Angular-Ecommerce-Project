import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    menuType: String = 'default';
    constructor(private route: Router) {}

    ngOnInit(): void {
        this.route.events.subscribe((val: any) => {
            if (val.url) {
                if (localStorage.getItem('seller') && val.url.includes('seller')) {
                    console.log("In Seller Area");
                    this.menuType = "seller";
                } else {
                    console.log("Outside Seller Area");
                    this.menuType = "default"
                }
            }
        });
    }

}
