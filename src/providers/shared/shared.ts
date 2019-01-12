import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfileStore } from './../../store/profileStore'
/*
  Generated class for the SharedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedProvider {

  constructor(public http: HttpClient, public profileStore:ProfileStore) {
    console.log('Hello SharedProvider Provider');
  }
clearStores(){
this.profileStore.clear();
}

}
