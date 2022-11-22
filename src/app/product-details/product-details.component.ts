import { product } from './../data-type';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
    productData: undefined | product;

    constructor(
        private activeRoute: ActivatedRoute,
        private product: ProductService
    ) { }

    ngOnInit(): void {
        let productId = this.activeRoute.snapshot.paramMap.get('productId');
        
        productId && this.product.getProduct(productId).subscribe((result) => {
            this.productData = result;
        });
    }

}
