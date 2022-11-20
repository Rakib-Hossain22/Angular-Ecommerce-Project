import { product } from './../data-type';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'app-seller-update-product',
    templateUrl: './seller-update-product.component.html',
    styleUrls: ['./seller-update-product.component.scss']
})
export class SellerUpdateProductComponent implements OnInit {
    productData: undefined | product;

    constructor(
        private route: ActivatedRoute,
        private product: ProductService
    ) { }

    ngOnInit(): void {
        let productId = this.route.snapshot.paramMap.get('id');
        console.log(productId);
        productId && this.product.getProduct(productId).subscribe((data) => {
            console.log(data);
            this.productData = data;
        });
    }

    submit(data: any) {
        
    }

}
