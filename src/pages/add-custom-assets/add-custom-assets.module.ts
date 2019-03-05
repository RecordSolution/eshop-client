import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCustomAssetsPage } from './add-custom-assets';

@NgModule({
  declarations: [
    AddCustomAssetsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCustomAssetsPage),
  ],
})
export class AddCustomAssetsPageModule {}
