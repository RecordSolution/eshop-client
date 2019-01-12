import { observable, computed , action} from 'mobx-angular';
// import { Orders } from '../../../shared/models/orders';

export class OrderStore{

    @observable  myOrders : Array<any>= [];
    @observable filteredOrders : Array<any> =[];
    @observable filter:string = '';



    constructor(){

    }
    @action setOrders(orders){

        this.myOrders = orders;
        if(this.filter && this.filter!=''){

            this.filterOrders(this.filter);

        }
        else{

            this.filteredOrders = orders;
        }
        

    }
    @action filterOrders(status?){



        if(status){
            this.filter = status;
            this.filteredOrders = this.myOrders.filter(x=>x.status==status);


            // return this.filteredOrders;
        }
        else{
            this.filteredOrders = this.myOrders;
          
        }

    }


    @computed  get getOrders() {

        // return this.myOrders;

        return this.filteredOrders;

        
    }
}