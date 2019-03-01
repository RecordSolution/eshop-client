import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrdersProvider} from '../../../providers/orders/orders';
import { Orders} from '../../../shared/models/orders';
import { OrderStore } from '../../../store/orders/orderstore';
import { OrderDetailsPage } from '../order-details/order-details';
import { PopoverController } from 'ionic-angular';
import { PopoverComponent} from '../../../components/popover/popover';
// import {} from '../../../store/orders/orderstore'; 

/**
 * Generated class for the AdmindashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admindashboard',
  templateUrl: 'admindashboard.html',
})
export class AdmindashboardPage {

  orders: Array<Orders>;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public orderService: OrdersProvider,
     public ordersStore : OrderStore,
     public popoverCtrl: PopoverController) {
    // this.productService.getVehicles().subscribe(res => {
    //   this.products = res
   
  }

  ionViewDidLoad() {
      //  if(this.ordersStore.myOrders.length==0){

        this.orderService.getorders().subscribe(res =>{
           this.orders=res;
          console.log(this.orders);
        })

      // }
    
  }

  filterOrders(status){
    // this.ordersStore.filterOrders(status);

  }


  productDetails(){
    this.navCtrl.push(OrderDetailsPage);
  }

  action1(){
    const popover = this.popoverCtrl.create(PopoverComponent);
    popover.present();
  }
}
