import { Component, OnInit } from '@angular/core';
import { ProductsProvider } from '../../../providers/products/products';
import { NavController } from 'ionic-angular';
import { CustomDesignHomePage } from '../../../pages/buyer/customDesign/custom-design/custom-design-home';
import { OrderStore } from '../../../store/orders/orderstore';
import * as _ from 'lodash';
import { CustomDesignViewModel } from '../../../pages/buyer/customDesign/model/custom-design-view.model';
import { ProductStore } from '../../../store/productstore/productstore';
/**
 * Generated class for the CustomProductSelectionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-product-selection',
  templateUrl: 'custom-product-selection.html'
})
export class CustomProductSelectionComponent implements OnInit {
products:Array<CustomDesignViewModel> = [];
  text: string;
  slectedItem:any;
  constructor(public productStore: ProductStore, public productService:ProductsProvider,public navCtrl: NavController,public orderStore:OrderStore) {
   
  }
  ngOnInit(){
    this.productService.getCustomDesinProducts().subscribe(res => {
      if(this.productStore.customDesignProducts && this.productStore.customDesignProducts.length > 0){
        for(let i=0; i < this.productStore.customDesignProducts.length;i++){
          if((this.productStore.customDesignProducts[i].dressCategory == this.orderStore.customDesignOrder.dressCategory) && (this.productStore.customDesignProducts[i].fashionCategory == this.orderStore.customDesignOrder.fashionCategory) && (this.productStore.customDesignProducts[i].gender == this.orderStore.customDesignOrder.gender)){
            this.products.push(res[i])
          }
        }
      }
      // this.products=   _.filter(res, { 'dressCategory': this.orderStore.customDesignOrder.dressCategory, 'fashionCategory': this.orderStore.customDesignOrder.fashionCategory,'gendar':this.orderStore.customDesignOrder.gender });
      console.log(this.products)
    });
  }
  goToFinalCustomView(){
    this.navCtrl.push(CustomDesignHomePage)
  }
  selectedArticle(item){
    this.orderStore.customDesignOrder.selectedItem = item;
      this.slectedItem = item;
  }
}
