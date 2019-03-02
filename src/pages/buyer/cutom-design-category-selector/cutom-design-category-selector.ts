import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ProductStore } from '../../../store/productstore/productstore';
import { ProductsProvider } from '../../../providers/products/products';
import { CustomDesignHomePage } from '../customDesign/custom-design/custom-design-home';

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
  fashionCategory: string = '';
  dressCategory: string = '';
  selectedProduct: any;
  svgs:any;

  constructor(public navCtrl: NavController,
    public alertCtrl:AlertController,
    public productStore: ProductStore, 
    public navParams: NavParams,
    private productsProvider: ProductsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CutomDesignCategorySelectorPage');

    this.productsProvider.getSvgs().subscribe(res =>{
      this.svgs= res;
      console.log(res)
    })
    screen.orientation.lock('landscape');
  }

  onDressCategorySelection(cat) {
    this.dressCategory = cat;
    this.getSelectedDress();
  }
  onFashionCategorySelection(cat) {
    this.fashionCategory = cat;
    this.getSelectedDress();
  }
  getSelectedDress() {
    this.selectedProduct = this.productStore.getproductForCustomDesign(this.dressCategory, this.fashionCategory);
    console.log(this.selectedProduct);
  if(this.selectedProduct)  {
    this.showDetails();
  }
  }
  showDetails() {
    
    this.navCtrl.push(CustomDesignHomePage, { 'data': this.selectedProduct });
  }
  forgotpassword() {
    let alert = this.alertCtrl.create({

      title: 'Forgot Password',
      inputs: [

        {

          name: 'email',
          placeholder: 'Enter Email Address',
          type: 'text'

        }
      ],
      buttons: [

        {

          text: 'Cancel',
          role: 'Cancel',
          handler: data => {

          }
        },
        {

          cssClass: 'ok',
          text: 'ok',
          handler: data => {

          }
        }
      ]
    });
    alert.present();
  }
}
