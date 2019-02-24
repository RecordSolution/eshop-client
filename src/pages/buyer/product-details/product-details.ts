import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderModel} from '../../../shared/models/ordered';
import { ProductStore } from '../../../store/productstore/productstore';
import { Product } from '../../../shared/models/product';

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
 order:OrderModel;
 details:Product
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public productStore : ProductStore,
    ) {
      this.order=new OrderModel();
    // this.details = this.navParams.get('data');
  }

  ionViewDidLoad() {
    this.details = this.navParams.get('data');

    console.log('ionViewDidLoad ProductDetailsPage', this.details);
  }
  getQuantity(count) {

  }

  onChange(){ 
    
  

   
  }

  onBuy(){
   console.log("order her ===>",this.order);
   console.log("product her ===>",this.details)
  }

 
}
