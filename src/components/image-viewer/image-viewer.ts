import { Component } from '@angular/core';

/**
 * Generated class for the ImageViewerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'image-viewer',
  templateUrl: 'image-viewer.html'
})
export class ImageViewerComponent {

  text: string;

  constructor() {
    console.log('Hello ImageViewerComponent Component');
    this.text = 'Hello World';
  }

}
