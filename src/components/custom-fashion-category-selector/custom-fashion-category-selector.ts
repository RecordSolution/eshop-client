import { Component } from '@angular/core';

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
export class CustomFashionCategorySelectorComponent {

  text: string;

  constructor() {
    console.log('Hello CustomFashionCategorySelectorComponent Component');
    this.text = 'Hello World';
  }

}
