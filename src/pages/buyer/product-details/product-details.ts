import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderModel } from '../../../shared/models/ordered';
import { OrderStore } from "./../../../store/orders/orderstore";
import { ProductStore } from '../../../store/productstore/productstore';
import { Product } from '../../../shared/models/product';
import { profileModel } from '../../../shared/models/profile';
import { ProfileStore } from '../../../store/profilestore/profileStore';

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
  order: OrderModel;
  details: Product;
  profile: profileModel;
  constructor(
    public navCtrl: NavController,
    public orderStore:OrderStore,
    public navParams: NavParams,
    public productStore: ProductStore,
    public profileStore: ProfileStore,
  ) {
    this.order = new OrderModel();
    // this.details = this.navParams.get('data');

  }

  ionViewDidLoad() {
    this.details = this.navParams.get('data');

    console.log('ionViewDidLoad ProductDetailsPage', this.details);
  }
  getQuantity(count) {

  }

  onChange() {


  }

  onBuy() {

    console.log("order her ===>", JSON.stringify(this.order));
    console.log("product her ===>", this.details);
    console.log("Profile", JSON.stringify(this.profile));
    let order = {
      addressToDeliver: this.profileStore.userData.address,
      buyer: this.profile,
      color: this.order.color,
      cutomerContact: this.profile.contactNo.toString(),
      orderDate: new Date(),
      size: this.order.size,
      quantity: this.order.quantity,
      orderType: 'general',
      status: 'pending',
      totalPrice: this.details.price,
      selectedproducts: this.details
    }
    this.orderStore.addNewOrder(order);
  }


}
