import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ordered} from '../../../shared/models/ordered';
import {orderDetails} from '../../../model/orderDetails';

/**
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
  details: [];
  number: string;
  quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  ordered :Array<any>;
  selectedQuantity : string;
  selectedColor : string;
  selectedSize : string;
  orderdetails : Array<orderDetails>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.details = this.navParams.get('data');
    
  }

  ionViewDidLoad() {
    this.details = this.navParams.get('data');
    // console.log('ionViewDidLoad ProductDetailsPage');
    
   
  }
 selectquantity(value){

   this.selectedQuantity = value;


  
  
 }

 selectColor(value){

  this.selectedColor = value;

 }
 
 selectSize(value){

  this.selectedSize = value;
 
 }
 
  buyProduct(){


    this.ordered = ['selectedQuantity',this.selectedQuantity ,'selectedColor', this.selectedColor ,'selectedSize',this.selectedSize];
   
    // localStorage.setItem('orderDetails',this.details);
    localStorage.setItem("order", JSON.stringify(this.ordered));
  }

   
  }


 

