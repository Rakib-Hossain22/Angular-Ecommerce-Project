import { product } from './../data-type';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    popularProducts: undefined | product[];

    constructor(private product: ProductService) { }

    ngOnInit(): void {
        this.product.popularProducts().subscribe((data) => {
            console.log(data);
            this.popularProducts = data;
        })
    }

}
