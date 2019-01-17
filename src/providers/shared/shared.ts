import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfileStore } from '../../store/profilestore/profileStore'
import { OrderStore } from '../../store/orders/orderstore';
/*
  Generated class for the SharedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedProvider {

  constructor(public http: HttpClient,
     public profileStore:ProfileStore,
     public adminOrdersStore:OrderStore) {
    console.log('Hello SharedProvider Provider');
  }
clearStores(){
this.profileStore.clear();
this.adminOrdersStore.clear();
}

}
