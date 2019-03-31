import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { ProductStore } from '../../store/productstore/productstore';
/*
  Generated class for the ProfuctsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductsProvider {

  constructor(public http: HttpClient, public productStore:ProductStore) {
    console.log('Hello ProfuctsProvider Provider');
    this.getProducts();
  }
 getProducts(value?: string) {
    return this.http.get('assets/products.json').
    pipe(map((data: any) => {
      console.log('profucts', data.products);
     this.productStore.saveProducts(data.products);
      return data.products;

    }))
  }
  getcustomDesignProducts(value?: string) {
    // debugger
    return this.http.get('assets/custom-design-products.json').
    // return this.http.get('/assets/custom-products.json').
    pipe(map((data: any) => {
      this.productStore.seveCustomProducts(data.customDesignProducts);
      // debugger
      return data.customDesignProducts;

    }))
  }
  getDesigingAssets(){
    return this.http.get('assets/custom-assets.json').
    pipe(map((data: any) => {
      this.productStore.seveCustomAssets(data.customAssets);
      return data.customAssets;
      // this.productStore.seveCustomAssets(data.customDesignProducts);
      // return data.customDesignProducts;
    }))
  }
}
