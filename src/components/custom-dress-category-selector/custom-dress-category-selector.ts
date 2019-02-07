import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello CustomDressCategorySelectorComponent Component');
    this.text = 'Hello World';
  }

}
