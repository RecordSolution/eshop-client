import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search';
import { ImageViewerComponent } from './image-viewer/image-viewer';
import { CustomFashionCategorySelectorComponent } from './custom-fashion-category-selector/custom-fashion-category-selector';
import { CustomDressCategorySelectorComponent } from './custom-dress-category-selector/custom-dress-category-selector';
import { ColorPickerComponent } from './color-picker/color-picker';
import { PopoverComponent } from './popover/popover';
@NgModule({
	declarations: [SearchComponent,
    ImageViewerComponent,
    CustomFashionCategorySelectorComponent,
    CustomDressCategorySelectorComponent,
    ColorPickerComponent,
    PopoverComponent],
	imports: [],
	exports: [SearchComponent,
    ImageViewerComponent,
    CustomFashionCategorySelectorComponent,
    CustomDressCategorySelectorComponent,
    ColorPickerComponent,
    PopoverComponent]
})
export class ComponentsModule {}
