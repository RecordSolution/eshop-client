import { observable, computed,autorun , action} from 'mobx';
// import { Orders } from '../../../shared/models/orders';
import { Injectable } from "@angular/core";


@Injectable()
export class OrderStore{

    @observable  myOrders : Array<any>= [];
    @observable filteredOrders : Array<any> =[];
    @observable filter:string = '';



    constructor(){

        autorun(() => {
            if (JSON.parse(localStorage.getItem('userData')) && JSON.parse(localStorage.getItem('userData')) != {}) {
                let obj = JSON.parse(localStorage.getItem('userData'));;
               
                    // this.myOrders = obj;
               
                console.log("Heello",this.myOrders);
            }
            else  {
                // window.localStorage.setItem('userData', JSON.stringify(this.userData));
            }

        });
    }

    @action clear(){
        this.myOrders=[];
        this.filter='';
        this.filteredOrders=[];
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