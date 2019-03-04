import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { ScreenOrientation } from 'ionic-native';
// import {ScreenOrientation} from "@ionic-native/screen-orientation";
import { CustomDesignSelectionModel } from "./model/custom_design-details.model"
import { DesignCanvasPage } from '../design-canvas/design-canvas';
import { ProductStore } from '../../../../store/productstore/productstore';
import { ProductsProvider } from '../../../../providers/products/products';
import html2canvas from 'html2canvas';
@IonicPage()
@Component({
  selector: 'custom-design',
  templateUrl: 'custom-design-home.html',
})
export class CustomDesignHomePage {
  @ViewChild('itemSlider') itemSlider: any;
  @ViewChild('frontScreen') frontScreen: ElementRef;
  @ViewChild('backScreen') backScreen: ElementRef;
  @ViewChild('frontCanvas') frontCanvas: ElementRef;
  @ViewChild('backCanvas') backCanvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;

  fashionCategory: string = '';
  dressCategory: string = '';
  customDesignSelectionModel: CustomDesignSelectionModel;
  color: string = "black";
  crossActive: boolean;
  size: any;
  selectedProduct: any;
  customAssets: Array<any>;
  showAssets: boolean = false;
  dragableAssets: Array<any> = [];
  dragableBackAssets: Array<any> = [];
  selectedToResize: any;
  svgs: any;
  inBounds = true;
  backInBounds = true;
  assetView:string;
  edge = {
    top: true,
    bottom: true,
    left: true,
    right: true
  };
  backEdge = {
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

    // this.customAssets = [{icon:'/assets/imgs/pocket-icon.png'}, {icon:'/assets/imgs/avatar.png'}, {icon:'/assets/imgs/logo.png'}]
    // this.customAssets = ['/assets/imgs/pocket-icon.png', '/assets/imgs/avatar.png', '/assets/imgs/logo.png']
    // ScreenOrientation.lockOrientation('landscape')
    this.selectedProduct = this.navParams.get('data');
    console.log('ionViewDidLoad CustomDesignPage');
    this.productsProvider.getDesigingAssets().subscribe(res => {
      this.customAssets = [...res];
      //   this.svgs= res;
      //   console.log(res)
    })
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
  selectColor(selectedColor) {
    this.color = selectedColor;
  }
  onCustomAssetSelection(item) {
    debugger;
    if (item) {
      this.showAssets = false;
      if(this.assetView == 'front'){
        this.dragableAssets.push(item);
      }
      else if(this.assetView == 'back'){
        this.dragableBackAssets.push(item);
      }
    }
  }
  active(item) {
    this.selectedToResize = item;
  }
  selectAssets(view) {
    debugger;
    this.showAssets = true;
    this.assetView = view;
  }
  closePopup() {
    this.showAssets = false
  }
  setBadge(size) {
    this.selectedToResize.width = size
  }
  checkEdge(event) {
    this.edge = event;
    console.log('edge:', event);
  }
  checkBackEdge(event){
    this.backEdge = event;
    console.log('backEdge:', event);
  }
  downloadImage() {


    html2canvas(this.frontScreen.nativeElement, {
      useCORS: true,
      scale:5,
      width: 300,
      height: 300
    }).then((canvas: any) => {
      debugger

      this.frontCanvas.nativeElement.src = canvas.toDataURL();
      // document.getElementById('test').appendChild(canvas);


      // this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      // this.downloadLink.nativeElement.download = 'marble-diagram.png';
      // this.downloadLink.nativeElement.click();
    });
    html2canvas(this.backScreen.nativeElement, {
      useCORS: true,
      scale:5,
      width: 300,
      height: 300
    }).then((canvas: any) => {
      debugger

      this.backCanvas.nativeElement.src = canvas.toDataURL();
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
