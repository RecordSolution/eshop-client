import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { ScreenOrientation } from 'ionic-native';
// import {ScreenOrientation} from "@ionic-native/screen-orientation";
import { CustomDesignSelectionModel } from "./model/custom_design-details.model"
import { DesignCanvasPage } from '../design-canvas/design-canvas';
import { ProductStore } from '../../../../store/productstore/productstore';

@IonicPage()
@Component({
  selector: 'custom-design',
  templateUrl: 'custom-design-home.html',
})
export class CustomDesignHomePage {
  @ViewChild('itemSlider') itemSlider: any;
  fashionCategory: string = '';
  dressCategory: string = '';
  customDesignSelectionModel: CustomDesignSelectionModel;
  color: string = "red";
  crossActive: boolean;
  size: any;
  selectedProduct: any;
  customAssets: Array<string>;
  showAssets: boolean = false;
  dragableAssets: Array<any> = [];
  selectedToResize: any;

  constructor(public navCtrl: NavController, public productStore: ProductStore, public navParams: NavParams) {
    this.customDesignSelectionModel = new CustomDesignSelectionModel();
  }
  onEventLog(colorPicker, event) {
    console.log(colorPicker, event);
    this.customDesignSelectionModel.selectedColor = event;
  }
  ionViewDidLoad() {
    this.customAssets = ['/assets/imgs/pocket-icon.png', '/assets/imgs/avatar.png', '/assets/imgs/logo.png']
    // ScreenOrientation.lockOrientation('landscape')
    screen.orientation.lock('landscape');
    console.log('ionViewDidLoad CustomDesignPage');
  }
  ionViewDidLeave() {
    screen.orientation.lock('portrait');
    console.log('ionViewDidLeave CustomDesignPage');
  }
  onFashionCategorySelection(cat) {
    this.fashionCategory = cat;
    this.getSelectedDress();
  }
  onDressCategorySelection(cat) {
    this.dressCategory = cat;
    this.getSelectedDress();
  }
  getSelectedDress() {
    this.selectedProduct = this.productStore.getproductForCustomDesign(this.dressCategory, this.fashionCategory);
    console.log(this.selectedProduct);
  }

  onCustomAssetSelection(item) {
    debugger
    if(item){
      this.showAssets = false;
      this.dragableAssets.push(item);
    }
  }
  active(item){
    this.selectedToResize=item;
  }
  selectAssets() {
    this.showAssets = true;
  }
  closePopup(){
    this.showAssets=false
  }
  setBadge(size) {
    this.size = size
  }
  // next() {
  //   this.itemSlider.slideNext();
  // }
  // getSize(size) {
  //   this.customDesignSelectionModel.size = size
  // }
  // selctedDress(imgurl) {
  //   this.customDesignSelectionModel.selectedDressType = imgurl;
  // }
  // prev() {
  //   this.itemSlider.slidePrev();
  // }
  // done() {
  //   this.navCtrl.push(DesignCanvasPage, { 'data': this.customDesignSelectionModel });
  // }
}
