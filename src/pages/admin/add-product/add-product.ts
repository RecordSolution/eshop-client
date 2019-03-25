import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//  import { addProductModel } from './addProductModel/addProductModel';



@IonicPage()
@Component({
  selector: 'page-add-product',
  templateUrl: 'add-product.html',
})
export class AddProductPage {

  // public avaliableSizes : [{'SM'},{'MD','LG','XL']
  // avaliableSizes :[ {'SM'},{'MD'},{'LG'},{'XL'},  ]
  avaliableSizes: Array<any>=['SM','MD','LG','XL'];
  Size : string;
  dressCategory : string;
  showSizes : Array<any>

  // addProducts : addProductModel;

  public  addProductModel:{name : string, id : string,shortDescription:string,colors : Array<string>,avaliableQuantity: string,images : Array<any>,dressCategory : string,fashionCatehory : string, gendar : string,sizes : Array<string>,price : string}={
    id : '',
    name :'',
    shortDescription : '',
    colors : [],
    avaliableQuantity : '',
    images : [],
    dressCategory : '',
    fashionCatehory : '',
    gendar : '',
    sizes :[],
    price : ''





  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // console.log(this.avaliableSizes)
  }

  ionViewDidLoad() {
    console.log();
  }

  filepicker(file){
    this.fileToBase64(file[0]).then(base64 => {console.log(base64)})
   
  }

  addProduct(){
    console.log('Here')
  }

  SelectedSize(){
    console.log('here')
   this.addProductModel.sizes.push(this.Size)
// this.showSizes.push(this.Size)
   console.log(this.addProductModel.sizes)


  }
  SelectedDressCategory(){

  }

  async fileToBase64(file: File) {

    return new Promise(

        (resolve, reject) => {
            let reader = new FileReader();
            reader.onload = (e: any) => {
                //   if (error) reject(error);
                //   let content = JSON.parse(data);
                //           let fact = content.value;
                resolve(e.target.result);
                // })
            }
            reader.readAsDataURL(file);
        });
}
}
