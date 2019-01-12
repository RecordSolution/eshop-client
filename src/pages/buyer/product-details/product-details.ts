import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
  details: any;
  number: number=0;
  quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.details = this.navParams.get('data');
  }

  ionViewDidLoad() {
    this.details = this.navParams.get('data');
    // console.log('ionViewDidLoad ProductDetailsPage');
  }
  getQuantity(count) {
    this.number = count;
    console.log(count)
  }

}
