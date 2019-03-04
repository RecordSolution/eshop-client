import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrdersProvider } from '../../../providers/orders/orders';
import { OrderStore } from '../../../store/orders/orderstore';

/**
 * Generated class for the UserOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-orders',
  templateUrl: 'user-orders.html',
})
export class UserOrdersPage {
  orders: Array<any>=[];

  constructor(public navCtrl: NavController, 
    public orderService: OrdersProvider,
     public ordersStore : OrderStore,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //  if(this.ordersStore.myOrders.length==0){

      this.orderService.getorders().subscribe(res =>{
         this.orders=res;
        console.log(this.orders);
      })

    // }
  
}

}
