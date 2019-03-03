import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenPage } from './../men/men';
import { ProductsProvider } from '../../../providers/products/products';
import { ProductStore } from '../../../store/productstore/productstore';



@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  constructor(public navCtrl: NavController,
    public productService: ProductsProvider,
    public navParams: NavParams, public productStore: ProductStore) {
  }

  ionViewDidLoad() {
    this.getProducts();
    console.log('ionViewDidLoad CategoriesPage');
  }

  goToMensPage() {
    this.navCtrl.push(MenPage);
  }

  getProducts() {
    // this.productService.getProducts().then(res => {
    //   // this.productStore.saveProducts(res);
    // })

  }
}
