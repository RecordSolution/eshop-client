import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search';
import { ImageViewerComponent } from './image-viewer/image-viewer';
@NgModule({
	declarations: [SearchComponent,
    ImageViewerComponent],
	imports: [],
	exports: [SearchComponent,
    ImageViewerComponent]
})
export class ComponentsModule {}
