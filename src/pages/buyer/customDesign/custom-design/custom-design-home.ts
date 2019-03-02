import { Component, ViewChild , ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { ScreenOrientation } from 'ionic-native';
// import {ScreenOrientation} from "@ionic-native/screen-orientation";
import { CustomDesignSelectionModel } from "./model/custom_design-details.model"
import { DesignCanvasPage } from '../design-canvas/design-canvas';
import { ProductStore } from '../../../../store/productstore/productstore';
import { ProductsProvider } from '../../../../providers/products/products';
import  html2canvas from 'html2canvas';
@IonicPage()
@Component({
  selector: 'custom-design',
  templateUrl: 'custom-design-home.html',
})
export class CustomDesignHomePage {
  @ViewChild('itemSlider') itemSlider: any;
  @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;
  fashionCategory: string = '';
  dressCategory: string = '';
  customDesignSelectionModel: CustomDesignSelectionModel;
  color: string = "black";
  crossActive: boolean;
  size: any;
  selectedProduct: any;
  customAssets: Array<string>;
  showAssets: boolean = false;
  dragableAssets: Array<any> = [];
  selectedToResize: any;
  svgs : any;
  inBounds = true;
  edge = {
    top: true,
    bottom: true,
    left: true,
    right: true
  };
  constructor(public navCtrl: NavController, 
    public productStore: ProductStore, 
    public navParams: NavParams,
    private productsProvider: ProductsProvider) {
    this.customDesignSelectionModel = new CustomDesignSelectionModel();
  }
  onEventLog(colorPicker, event) {
    console.log(colorPicker, event);
    this.customDesignSelectionModel.selectedColor = event;
  }
  ionViewDidLoad() {
    this.customAssets = ['/assets/imgs/pocket-icon.png', '/assets/imgs/avatar.png', '/assets/imgs/logo.png']
    // ScreenOrientation.lockOrientation('landscape')
    this.selectedProduct = this.navParams.get('data'); 
    console.log('ionViewDidLoad CustomDesignPage');
    // this.productsProvider.getSvgs().subscribe(res =>{
    //   this.svgs= res;
    //   console.log(res)
    // })
    screen.orientation.lock('landscape');
  }
  ionViewDidLeave() {
    screen.orientation.lock('portrait');
    console.log('ionViewDidLeave CustomDesignPage');
  }
  // onFashionCategorySelection(cat) {
  //   this.fashionCategory = cat;
  //   this.getSelectedDress();
  // }
  // onDressCategorySelection(cat) {
  //   this.dressCategory = cat;
  //   this.getSelectedDress();
  // }
  // getSelectedDress() {
  //   this.selectedProduct = this.productStore.getproductForCustomDesign(this.dressCategory, this.fashionCategory);
  //   console.log(this.selectedProduct);
  // }
  selectColor(selectedColor){
    this.color=selectedColor;
  }
  onCustomAssetSelection(item) {
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
  checkEdge(event) {
    this.edge = event;
    console.log('edge:', event);
  }
  downloadImage(){
    
    
    html2canvas(this.screen.nativeElement, {
      useCORS: true,
      width:300,
      height:300
  }).then((canvas:any) => {
      debugger
  
      this.canvas.nativeElement.src = canvas.toDataURL();
      // document.getElementById('test').appendChild(canvas);


      // this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      // this.downloadLink.nativeElement.download = 'marble-diagram.png';
      // this.downloadLink.nativeElement.click();
    });
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
