import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ProductStore } from '../../../store/productstore/productstore';
import { ProductsProvider } from '../../../providers/products/products';
import { CustomDesignHomePage } from '../customDesign/custom-design/custom-design-home';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SharedProvider } from '../../../providers/shared/shared';
import { CustomProductSelectionComponent } from '../../../components/custom-design/custom-product-selection/custom-product-selection';
import { CustomDesignViewModel } from '../customDesign/model/custom-design-view.model';
import { OrderStore } from '../../../store/orders/orderstore';
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
  designForm : FormGroup;
  dressDesignes:Array<any>=[];
  fasionDesignes:Array<any>=[];
  submitted:boolean = false;
//   validation_messages = {
//       'name': [
//       { type: 'text', message: 'Please enter your name.' }
//     ],
//     'email': [
//       { type: 'text', message: 'Please enter your email.' }
//     ],
//     'ph': [
//       { type: 'text', message: 'Please enter your Mobile #.' }
//     ],
//     'cat': [
//       { type: 'text', message: 'Please select  Category.' }
//     ],
//     'dressCat': [
//       { type: 'text', message: 'Please select dress Category.' }
//     ]
// }
  constructor(public navCtrl: NavController,
    public alertCtrl:AlertController,
    public productStore: ProductStore, 
    public navParams: NavParams,
    private productsProvider: ProductsProvider,
    public formBuilder: FormBuilder,
    public sharedService: SharedProvider,
    public orderStore:OrderStore) {
      this.designForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        ph: ['', Validators.required],
        cat: ['', Validators.required],
        dressCat: ['', Validators.required],
        gender: ['', Validators.required]
        
    });

    // Initial value for the field.
    // this.form.get('myField').setValue('11223344/55');
  }
  
  ngOnInit(){
    this.sharedService.getdressCategories().subscribe(res=>{
      console.log(res);
      this.dressDesignes=res;
    })
    this.sharedService.getFashionCategories().subscribe(res=>{
      console.log(res);
      this.fasionDesignes=res;
    })
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
    debugger
  }
  onFashionCategorySelection(cat) {
    this.fashionCategory = cat;
    this.getSelectedDress();
    debugger
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
  onSubmit() {
    debugger;
    this.submitted = true;
    // stop here if form is invalid
    if (this.designForm.invalid) {
      // this.orderStore.customDesignOrder.name = this.designForm.controls.name.value;
      // this.orderStore.customDesignOrder.email = this.designForm.controls.email.value;
      // this.orderStore.customDesignOrder.ph = this.designForm.controls.ph.value;
      this.orderStore.customDesignOrder.gender = this.designForm.controls.gender.value;
      this.orderStore.customDesignOrder.dressCategory = this.designForm.controls.dressCat.value;
      this.orderStore.customDesignOrder.fashionCategory = this.designForm.controls.cat.value;
        // return;
        this.navCtrl.push(CustomProductSelectionComponent)
    }else{
      this.orderStore.customDesignOrder.name = this.designForm.controls.name.value;
      this.orderStore.customDesignOrder.email = this.designForm.controls.email.value;
      this.orderStore.customDesignOrder.ph = this.designForm.controls.ph.value;
      this.orderStore.customDesignOrder.gender = this.designForm.controls.gender.value;
      this.orderStore.customDesignOrder.dressCategory = this.designForm.controls.dressCat.value;
      this.orderStore.customDesignOrder.fashionCategory = this.designForm.controls.cat.value;
    }

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.designForm.value))
}
}
