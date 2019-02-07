import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DesignCanvasPage } from './design-canvas';

@NgModule({
  declarations: [
    DesignCanvasPage,
  ],
  imports: [
    IonicPageModule.forChild(DesignCanvasPage),
  ],
})
export class DesignCanvasPageModule {}
