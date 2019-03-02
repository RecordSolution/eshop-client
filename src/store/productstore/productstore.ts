import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { observable, autorun, action, computed } from 'mobx';

@Injectable()
export class ProductStore {

    @observable allProducts: Array<any> = [];
    @observable customProducts: Array<any> = [];

    constructor() {

        autorun(() => {
            if (JSON.parse(localStorage.getItem('products')) && JSON.parse(localStorage.getItem('products')) != {}) {
                let obj = JSON.parse(localStorage.getItem('products'));;
                if (obj && obj.accountType) {
                    this.allProducts = obj;
                }
                console.log(this.allProducts);
            }
            else if (this.allProducts) {
                window.localStorage.setItem('products', JSON.stringify(this.allProducts));
            }

        });
    }

    @action clear() {
        this.allProducts = null;
        localStorage.removeItem('userData');
    }
    @action saveProducts(products: Array<any>) {
        this.allProducts = [...products];
        window.localStorage.setItem('products', JSON.stringify(this.allProducts));
    }
    @computed get products() {

        return this.allProducts;

    }
    @action seveCustomProducts(products) {
        console.log('custom products', products);
        this.customProducts = [...products];
    }
    getproductForCustomDesign(dressCategory, fashionCategory) {
        let p = this.customProducts.find(x => x.dressCategory == dressCategory.key && x.fashionCategory == fashionCategory.key);
        return p;
    }
}