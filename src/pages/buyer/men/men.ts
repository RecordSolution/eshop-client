import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductsProvider } from '../../../providers/products/products';
import { Subscriber } from 'rxjs/Subscriber';
import { Product } from '../../../shared/models/product';

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
  products: Array<Product>;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public productService: ProductsProvider) {
    this.productService.getVehicles().subscribe(res => {
      this.products = res;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenPage');
  }

}
