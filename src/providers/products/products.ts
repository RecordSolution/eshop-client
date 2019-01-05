import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the ProfuctsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProfuctsProvider Provider');
    this.getVehicles()
  }
 getVehicles(value?: string) {
    return this.http.get('./../assets/json/products.json').
    map((data: any) => {
      console.log('profucts', data.products);
     return data.products;
      // return vehicles.filter(v =>
      //   v.name.toLowerCase().includes(value.toLowerCase())
      // );
    })
  }
}
