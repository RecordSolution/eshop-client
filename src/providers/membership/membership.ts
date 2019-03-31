import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { ProfileStore } from '../../store/profilestore/profileStore';
/*
  Generated class for the MembershipProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MembershipProvider {

  constructor(public http: HttpClient, private profileStore:ProfileStore) {
    console.log('Hello MembershipProvider Provider');
  }
  
  login(userCredentials) {
    return this.http.get('assets/membership.json').pipe(map((res: any) => {
      let ifUser = res.user.find(x => x.email == userCredentials.email && x.password == userCredentials.password);
      if (ifUser) {
        this.profileStore.setUserData(ifUser);
        return ifUser;
      } else {
        return false;
      }
    }))
  }
}
