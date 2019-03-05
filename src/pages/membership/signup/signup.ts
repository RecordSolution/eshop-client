import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriesPage } from "./../../buyer/categories/categories";
import { CustomDesignHomePage } from '../../buyer/customDesign/custom-design/custom-design-home';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  goBuyerHomePage(){
    this.navCtrl.setRoot(CustomDesignHomePage);
  }

  Signup(){
    this.navCtrl.setRoot(CategoriesPage)
  }
  login(){
    this.navCtrl.setRoot('LoginPage');
  }
}
