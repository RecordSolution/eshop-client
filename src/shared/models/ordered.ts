import { profileModel } from "./profile";
import { Product } from "./product";

export class OrderModel{
    id:string;
    status:string;
    orderDate:string;
    addressToDeliver:string;
    cutomerContact:string;
    estimatedDateToDeliver:string;
    totalPrice:string;
    color:any;
    size:string;
    quantity:number;
    orderType:string;
    buyer:profileModel;
    selectedproducts:Product;

    constructor(){

    }
}



