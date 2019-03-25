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
    public alertCtrl:AlertController,
    private productsProvider: ProductsProvider,
    public orderStore:OrderStore) {
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
    this.selectedProduct = this.orderStore.customDesignOrder.selectedItem;
    console.log('ionViewDidLoad CustomDesignPage');
    this.productsProvider.getDesigingAssets().subscribe(res => {
      debugger
      this.customAssets = [...res];
      this.color=this.selectedProduct.colors[0];
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
    console.log(this.selectedProduct)
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
  downloadImage() {


    html2canvas(this.frontScreen.nativeElement, {
      useCORS: true,
      scale:5,
      width: 300,
      height: 300
    }).then((canvas: any) => {
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
      this.backCanvas.nativeElement.src = canvas.toDataURL();
      // document.getElementById('test').appendChild(canvas);


      // this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      // this.downloadLink.nativeElement.download = 'marble-diagram.png';
      // this.downloadLink.nativeElement.click();
    });
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
