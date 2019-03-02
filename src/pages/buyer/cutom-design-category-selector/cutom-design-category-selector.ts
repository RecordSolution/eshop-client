import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CutomDesignCategorySelectorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name:"custom-category-selector",segment:"app"})
@Component({
  selector: 'page-cutom-design-category-selector',
  templateUrl: 'cutom-design-category-selector.html',
})
export class CutomDesignCategorySelectorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CutomDesignCategorySelectorPage');
  }

}
