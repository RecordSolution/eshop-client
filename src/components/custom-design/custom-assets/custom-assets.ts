import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the CustomAssetsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-assets',
  templateUrl: 'custom-assets.html'
})
export class CustomAssetsComponent {

  @Input() allCustomAssets: Array<any>=[];
  @Output() onAssetsSelection: EventEmitter<string> = new EventEmitter<string>();
  @Output() onCancel: EventEmitter<boolean> = new EventEmitter<boolean>();
  seletedItem:string='';
  errorMessage: string='';
  constructor() {
    console.log('Hello CustomAssetsComponent Component');

  }

  onSelection(item) {
    this.seletedItem=item;
    // this.onAssetsSelection.emit(item);
  }
close(){
  this.onCancel.emit(false);
}
  onConfirm(){
    if(this.seletedItem){
      this.onAssetsSelection.emit(this.seletedItem);
    }else{
      this.errorMessage='please select atleast one item';
      setTimeout(() => {
        this.errorMessage='';
      }, 2000);
     
    }
    
  }

  ifSelected(item){
    if(item==this.seletedItem){
      return true;
    }else{
      return false;
    }
  }

}
