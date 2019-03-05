import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductsProvider } from '../../../providers/products/products';
// import { Subscriber } from 'rxjs/Subscriber';
import { Product } from '../../../shared/models/product';
import { ProductDetailsPage } from '../product-details/product-details';
import { ProductStore } from '../../../store/productstore/productstore';

/**
 * Generated class for the MenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-men',
  templateUrl: 'men.html',
})
export class MenPage {
  products: Array<Product>=[];
  category: string='';
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public productStore:ProductStore,
    public productService: ProductsProvider) {
    this.productService.getProducts().subscribe(res => {
      // this.products = res;
    });
  }

  ionViewDidLoad() {
    this.category = this.navParams.get('category');
    console.log('ionViewDidLoad MenPage');
  }

  showDetails(product) {
    
    this.navCtrl.push(ProductDetailsPage, { 'data': product });
  }

}
