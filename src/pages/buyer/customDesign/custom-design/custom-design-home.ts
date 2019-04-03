import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

// import { ScreenOrientation } from 'ionic-native';
// import {ScreenOrientation} from "@ionic-native/screen-orientation";
import { CustomDesignSelectionModel } from "./model/custom_design-details.model"
import { DesignCanvasPage } from '../design-canvas/design-canvas';
import { ProductStore } from '../../../../store/productstore/productstore';
import { ProductsProvider } from '../../../../providers/products/products';
import { OrderStore } from '../../../../store/orders/orderstore';
import html2canvas from 'html2canvas';
import { OrdersProvider } from '../../../../providers/orders/orders';
@IonicPage()
@Component({
  selector: 'custom-design',
  templateUrl: 'custom-design-home.html',
})
export class CustomDesignHomePage {
  @ViewChild('itemSlider') itemSlider: any;
  @ViewChild('frontScreen') frontScreen: ElementRef;
  @ViewChild('backScreen') backScreen: ElementRef;
  @ViewChild('frontCanvas') frontCanvas: HTMLImageElement;
  @ViewChild('backCanvas') backCanvas: HTMLImageElement;
  // @ViewChild('frontCanvas1') frontCanvas1: ElementRef;
  // @ViewChild('backCanvas1') backCanvas1: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;

  fashionCategory: string = '';
  dressCategory: string = '';
  customDesignSelectionModel: CustomDesignSelectionModel;
  color: string = "black";
  selectedColor:string;
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
  selectedItem:Object;
  selectedSize:string;
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
    public alertCtrl:AlertController,
    private productsProvider: ProductsProvider,
    public orderStore:OrderStore,
    public orderService:OrdersProvider) {
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
    //====> for svg custom design
    // this.selectedProduct = this.navParams.get('data');
    // or image custom designs
    screen.orientation.lock('landscape');
    this.selectedProduct = this.orderStore.customDesignOrder.selectedItem;
    this.selectedProduct.isStandardSize = "true";
    this.selectedItem = this.selectedProduct.images[0];
    this.selectedColor = this.selectedProduct.colors[0];
    this.selectedSize = this.selectedProduct.sizes[0];
    console.log('ionViewDidLoad CustomDesignPage');
    this.productsProvider.getDesigingAssets().subscribe(res => {
      debugger
      this.customAssets = [...res];
      this.selectedColor=this.selectedProduct.colors[0];
      //   this.svgs= res;
      //   console.log(res)
    })
    screen.orientation.lock('landscape');
  }
  ionViewDidLeave() {
    screen.orientation.lock('portrait');
    console.log('ionViewDidLeave CustomDesignPage');
  }
  matchImage(side){
   let image = this.selectedProduct.images.find(x=>x.color==this.color && x.side==side);
  if(image){
    return image.img;
  }
  //  return image.img;
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
    this.selectedColor = selectedColor;
    this.orderStore.customDesignOrder.selectedItem["selectedColor"] = selectedColor;
  }
  onCustomAssetSelection(item) {
    if (item) {
      item.rotate = '';
      item.rotate = 0;
      item.isRotateIcon = false;
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
  forgotpassword() {
    let alert = this.alertCtrl.create({

      title: 'Extra Instructions',
      inputs: [

        {
          name: 'details',
          placeholder: 'Enter Details',
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
  selectSize(size) {
    this.selectedSize = size;
    this.orderStore.customDesignOrder.selectedItem["selectedSize"] = size;
  }
  order() {
    this.orderStore.customDesignOrder.selectedItem["selectedSize"] = this.selectedSize;
    this.orderStore.customDesignOrder.selectedItem["selectedColor"] = this.selectedColor;

    html2canvas(this.frontScreen.nativeElement, {
      useCORS: true,
      scale:5,
      width: 300,
      height: 300
    }).then((canvas: any) => {
      this.frontCanvas = document.createElement("img");
      this.frontCanvas.id = "frontCanvas";
      this.frontCanvas.src = canvas.toDataURL();
      // this.frontCanvas1.nativeElement.src = this.frontCanvas.src;
      debugger
     fetch(this.frontCanvas.src)
  .then(res => res.blob())
  .then(blob => {
    this.orderStore.customDesignOrder.selectedItem["selectedItemFront"] = new File([blob], "front")
  })
    });
    html2canvas(this.backScreen.nativeElement, {
      useCORS: true,
      scale:5,
      width: 300,
      height: 300
    }).then((canvas: any) => {
      this.backCanvas = document.createElement("img");
      this.backCanvas.id = "backCanvas";
      this.backCanvas.src = canvas.toDataURL();

      // this.backCanvas1.nativeElement.src = this.backCanvas.src;
      fetch(this.backCanvas.src)
      .then(res => res.blob())
      .then(blob => {
        
        this.orderStore.customDesignOrder.selectedItem["selectedItemBack"] = new File([blob], "back");
        this.orderService.orderSubmit(this.orderStore.customDesignOrder);
      })
    });
    console.log(this.orderStore.customDesignOrder);
    debugger
  }
  imageRotate = (index,view) => {
    if(view == 'front'){
      if(this.dragableAssets[index].rotate >= 0 && this.dragableAssets[index].rotate < 270){
        this.dragableAssets[index].rotate = this.dragableAssets[index].rotate + 90
      }
      else{
        this.dragableAssets[index].rotate = 0;
      }
       
    }else if( view == 'back'){
      if(this.dragableBackAssets[index].rotate >= 0 && this.dragableBackAssets[index].rotate < 270){
        this.dragableBackAssets[index].rotate = this.dragableBackAssets[index].rotate + 90
      }
      else{
        this.dragableBackAssets[index].rotate = 0;
      }
    }
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
