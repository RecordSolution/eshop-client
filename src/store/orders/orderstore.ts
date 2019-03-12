import { observable, autorun, computed, action } from 'mobx';
import { Orders } from './../../shared/models/orders';
import { Injectable } from "@angular/core";
import { CustomDesignViewModel } from '../../pages/buyer/customDesign/model/custom-design-view.model';


@Injectable()
export class OrderStore {

    @observable myOrders: Array<any> = [];
    @observable filteredOrders: Array<any> = [];
    @observable filter: string = '';
    @observable customDesignOrder: CustomDesignViewModel;

    constructor() {
        this.customDesignOrder = new CustomDesignViewModel();
        autorun(() => {
            if (JSON.parse(localStorage.getItem('orders')) && JSON.parse(localStorage.getItem('orders')) != {}) {
                let obj = JSON.parse(localStorage.getItem('orders'));;
                if (obj && obj.accountType) {
                    this.filteredOrders = obj;
                }
                console.log(this.filteredOrders);
            }
            else if (this.filteredOrders) {
                window.localStorage.setItem('orders', JSON.stringify(this.filteredOrders));
            }

        });
    }


    @action addNewOrder(order) {
        this.myOrders.push(order);
    }
    @action clear() {
        this.myOrders = [];
        this.filter = '';
        this.filteredOrders = [];
    }
    @action setOrders(orders) {

        this.myOrders = orders;
        window.localStorage.setItem('products', JSON.stringify(orders));
        if (this.filter && this.filter != '') {

            this.filterOrders(this.filter);

        }
        else {

            this.filteredOrders = orders;
        }


    }
    @action filterOrders(status?) {

        console.log(status)


        if (status) {
            this.filter = status;
            this.filteredOrders = this.myOrders.filter(x => x.status == status);


            // return this.filteredOrders;
        }
        else {
            this.filteredOrders = this.myOrders;

        }

    }


    @computed get getOrders() {

        // return this.myOrders;

        return this.filteredOrders;


    }
}