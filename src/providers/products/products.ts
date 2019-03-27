import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { ProductStore } from '../../store/productstore/productstore';
import { AssetsStore } from '../../store/assetsstore/assetsstore';
/*
  Generated class for the ProfuctsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductsProvider {

  constructor(public http: HttpClient, public productStore:ProductStore,public assetStore : AssetsStore) {
    console.log('Hello ProfuctsProvider Provider');
    this.getProducts();
  }
 getProducts(value?: string) {
    return this.http.get('./../assets/products.json').
    pipe(map((data: any) => {
      console.log('profucts', data.products);
     this.productStore.saveProducts(data.products);
      return data.products;

    }))
  }
  getSvgs(value?: string) {
    // debugger
    // return this.http.get('/assets/svg-data.json').
    return this.http.get('/assets/custom-products.json').
    pipe(map((data: any) => {
      this.productStore.seveCustomProducts(data.customProducts);
      return data.customProducts;

    }))
  }
  getDesigingAssets(){
    return this.http.get('/assets/custom-assets.json').
    pipe(map((data: any) => {
      this.assetStore.seveCustomAssets(data.customAssets);
      return data.customAssets;

    }))
  }
}
