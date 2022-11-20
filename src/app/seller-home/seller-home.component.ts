import { product } from './../data-type';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
@Component({
    selector: 'app-seller-home',
    templateUrl: './seller-home.component.html',
    styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent implements OnInit {
    productList: undefined | product[];
    productMessage: undefined | string;
    icon = faTrash;
    EditIcon = faEdit;
    constructor(private product: ProductService) { }

    ngOnInit(): void {
        this.list();
    }

    deleteProduct(id: number) {
        console.log(id);
        this.product.deleteProduct(id).subscribe((result) => {
            if (result) {
                this.productMessage = "Product is Deleted";
                this.list();
            }
        })
        setTimeout(() => this.productMessage = undefined, 3000);
    }

    list() {
        this.product.productList().subscribe((result) => {
            console.log(result);
            this.productList=result;
        })
    }

}
