import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomDesignPage } from './custom-design';

@NgModule({
  declarations: [
    CustomDesignPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomDesignPage),
  ],
})
export class CustomDesignPageModule {}
