import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { ScreenOrientation } from 'ionic-native';
// import {ScreenOrientation} from "@ionic-native/screen-orientation";
import { CustomDesignSelectionModel } from "./model/custom_design-details.model"
import { DesignCanvasPage } from '../design-canvas/design-canvas';
@IonicPage()
@Component({
  selector: 'custom-design',
  templateUrl: 'custom-design-home.html',
})
export class CustomDesignHomePage {
  @ViewChild('itemSlider') itemSlider: any;
  customDesignSelectionModel: CustomDesignSelectionModel;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.customDesignSelectionModel = new CustomDesignSelectionModel();
  }
  onEventLog(colorPicker, event) {
    console.log(colorPicker, event);
    this.customDesignSelectionModel.selectedColor = event;
  }
  ionViewDidLoad() {
    
    // ScreenOrientation.lockOrientation('landscape')
screen.orientation.lock('landscape');
    console.log('ionViewDidLoad CustomDesignPage');
  }
  next() {
    this.itemSlider.slideNext();
  }
  getSize(size) {
    this.customDesignSelectionModel.size = size
  }
  selctedDress(imgurl) {
    this.customDesignSelectionModel.selectedDressType = imgurl;
  }
  prev() {
    this.itemSlider.slidePrev();
  }
  done() {
    this.navCtrl.push(DesignCanvasPage, { 'data': this.customDesignSelectionModel });
  }
}
