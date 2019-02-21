import { Component, Output, EventEmitter } from '@angular/core';
import { SharedProvider } from '../../../providers/shared/shared';

/**
 * Generated class for the CustomDressCategorySelectorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-dress-category-selector',
  templateUrl: 'custom-dress-category-selector.html'
})
export class CustomDressCategorySelectorComponent {
  dressDesignes:Array<any>=[]
  text: string;
@Output() selectedCategory:EventEmitter<any>=new EventEmitter<any>();
constructor(public sharedService: SharedProvider){

}
  ngOnInit(){
    this.sharedService.getdressCategories().subscribe(res=>{
      console.log(res);
      this.dressDesignes=res;
    })
  }

  onSelectCategory(selectedCategory){
    this.selectedCategory.emit(selectedCategory);
    // alert('selected category is '+ selectedCategory.key);
  }
}
