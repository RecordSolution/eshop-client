import { profileModel } from "./profile";
import { Product } from "./product";

export class OrderModel{
    id:string;
    status:string;
    orderDate:Date;
    addressToDeliver:string;
    cutomerContact:string;
    estimatedDateToDeliver:Date;
    totalPrice:number;
    color:any;
    size:string;
    quantity:number;
    orderType:string;
    buyer:profileModel;
    selectedproducts:Product;

    constructor(){

    }
}



