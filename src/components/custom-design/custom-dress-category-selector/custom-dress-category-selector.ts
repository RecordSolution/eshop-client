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
  dressDesignes:Array<any>=[];
  text: string;
  selectedItem:any;
  colors : Array<string>= ['#e6194b', '#3cb44b', '#46f0f0', '#4363d8', '#f58231', '#911eb4'];
@Output() selectedCategory:EventEmitter<any>=new EventEmitter<any>();
constructor(public sharedService: SharedProvider){

}
  ngOnInit(){
    this.sharedService.getdressCategories().subscribe(res=>{
      console.log(res);
      this.dressDesignes=res;
      if(this.dressDesignes && this.dressDesignes.length > 0){
        for(let r=0;r < this.dressDesignes.length;r++){
          this.dressDesignes[r].color = "";
              this.dressDesignes[r].color = this.colors[r];
        }
      }


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
