import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddProductModel } from './addProductModel/addProductModel';
import { FileViewModel } from '../shared/models/fileViewModel';

//  import { addProductModel } from './addProductModel/addProductModel';



@IonicPage()
@Component({
  selector: 'page-add-product',
  templateUrl: 'add-product.html',
})
export class AddProductPage {
  addProductModel: AddProductModel;
  // public avaliableSizes : [{'SM'},{'MD','LG','XL']
  // avaliableSizes :[ {'SM'},{'MD'},{'LG'},{'XL'},  ]
  avaliableSizes: Array<any> = ['SM', 'MD', 'LG', 'XL'];
  Size: string;
  dressCategory: string;
  showSizes: Array<any>

  // addProducts : addProductModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.addProductModel = new AddProductModel();
    // console.log(this.avaliableSizes)
  }

  ionViewDidLoad() {
    console.log();
  }

  filepicker(file) {
    let newFile: FileViewModel = new FileViewModel();
    newFile.name = file.target.files[0].name;
    newFile.base64File.name = file.target.files[0].name;
    this.fileToBase64(file.target.files[0]).then(res => {
      newFile.base64File.src = res;
      newFile.base64File.type = file.target.files[0].type;
      newFile.file = file.target.files[0];
      newFile.type = file.target.files[0].type;
      this.addProductModel.images.push(newFile);
      // this.mediaFilesToShow$.next(this.campaignViewModel.mediaFiles);
    }).catch(
      error => console.log(error)
    )


  }

  addProduct() {
    console.log('Here')
  }

  SelectedSize() {
    console.log('here')
    this.addProductModel.sizes.push(this.Size)
    // this.showSizes.push(this.Size)
    console.log(this.addProductModel.sizes)


  }
 

  async fileToBase64(file) {

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
