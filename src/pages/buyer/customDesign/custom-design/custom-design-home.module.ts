import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomDesignHomePage } from './custom-design-home';
// import { CustomDesignPageModule } from './custom-design.module';

@NgModule({
  declarations: [
    CustomDesignHomePage,
  ],
  imports: [
    IonicPageModule.forChild(CustomDesignHomePage),
  ],
})
export class CustomDesignHomePageModule {}
