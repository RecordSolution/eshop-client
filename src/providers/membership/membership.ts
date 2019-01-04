import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the MembershipProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MembershipProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MembershipProvider Provider');
  }
// loginUser(userCredentials){
// return this.http.get('./../assets/json/membership.json').map(res=>{
//  console.log(res);
//   return res;
// })
// }
}
