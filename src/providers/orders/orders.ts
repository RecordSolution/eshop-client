import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderStore} from '../../store/orders/orderstore';
import {map} from 'rxjs/operators';


@Injectable()
export class OrdersProvider {

  constructor(public http: HttpClient , private ordersStore : OrderStore) {
    console.log('Hello OrdesProvider Provider');
    this.getorders()


  }
 getorders(value?: string) {
    return this.http.get('assets/orders.json').pipe(
    map((data: any) => {
      console.log('Orders', data.orders);
   this.ordersStore.setOrders(data.orders);
     return data.orders;
    }))
  }
  orderSubmit(order) {
    console.log(order);
    debugger;
  //   return this.http.get('assets/orders.json').pipe(
  //   map((data: any) => {
  //     console.log('Orders', data.orders);
  //  this.ordersStore.setOrders(data.orders);
  //    return data.orders;
  //   }))
  }
}
