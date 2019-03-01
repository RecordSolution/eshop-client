import { Component } from '@angular/core';
import { OrderStore} from '../../store/orders/orderstore';

/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {
 
  filyer : string;
  text: any;
  optionsList : ['Pending','Completed','Rejected'];

  constructor( private ordersStore : OrderStore) {
    this.text = ['pending','completed','rejected'];
  }
  filterList(list){
   
    this.ordersStore.filterOrders(list);
  }

}
