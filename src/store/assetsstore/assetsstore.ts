import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { observable, autorun, action, computed } from 'mobx';

@Injectable()
export class AssetsStore {

   
    @observable customProducts: Array<any> = [];
    @observable customAssets: Array<any> = [];

    constructor() {
  
        
    }

  
  
    @action seveCustomAssets(assets) {
        console.log('custom assets', assets);
        this.customAssets = [...assets];
    }
    @computed get getCustomAssets(){
        return this.customAssets;
    }
    @action seveCustomProducts(products) {

        this.customProducts = [...products];
    }
    getproductForCustomDesign(dressCategory, fashionCategory) {
        let p = this.customProducts.find(x => x.dressCategory == dressCategory.key && x.fashionCategory == fashionCategory.key);
        return p;
    }
}