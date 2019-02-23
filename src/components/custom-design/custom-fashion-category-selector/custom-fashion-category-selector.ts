import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedProvider } from '../../../providers/shared/shared';

/**
 * Generated class for the CustomFashionCategorySelectorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-fashion-category-selector',
  templateUrl: 'custom-fashion-category-selector.html'
})
export class CustomFashionCategorySelectorComponent implements OnInit {
fasionDesignes:Array<any>=[]
  text: string;
  selectedItem:any;
@Output() selectedCategory:EventEmitter<any>=new EventEmitter<any>();

  constructor(public sharedService: SharedProvider) {
    console.log('Hello CustomFashionCategorySelectorComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit(){
    this.sharedService.getFashionCategories().subscribe(res=>{
      console.log(res);
      this.fasionDesignes=res;
    })
  }

  onSelectCategory(selectedCategory){
    this.selectedItem=selectedCategory;
    this.selectedCategory.emit(selectedCategory);
    // alert('selected category is '+ selectedCategory.key);
  }
  isSelectedItem(cat){
    return this.selectedItem==cat ? true:false;
   }

}
