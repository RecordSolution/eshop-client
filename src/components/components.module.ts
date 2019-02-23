import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search';
import { ImageViewerComponent } from './image-viewer/image-viewer';
import { CustomFashionCategorySelectorComponent } from './custom-design/custom-fashion-category-selector/custom-fashion-category-selector';
import { CustomDressCategorySelectorComponent } from './custom-design/custom-dress-category-selector/custom-dress-category-selector';
import { ColorPickerComponent } from './color-picker/color-picker';
import { CustomAssetsComponent } from './custom-design/custom-assets/custom-assets';
@NgModule({
	declarations: [SearchComponent,
    ImageViewerComponent,
    CustomFashionCategorySelectorComponent,
    CustomDressCategorySelectorComponent,
    ColorPickerComponent,
    CustomAssetsComponent],
	imports: [],
	exports: [SearchComponent,
    ImageViewerComponent,
    CustomFashionCategorySelectorComponent,
    CustomDressCategorySelectorComponent,
    ColorPickerComponent,
    CustomAssetsComponent]
})
export class ComponentsModule {}
