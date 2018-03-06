import { Elastic } from './elastic/elastic';
import { NgModule } from '@angular/core';
import { AutosizeDirective } from './autosize/autosize';
@NgModule({
	declarations: [AutosizeDirective,Elastic],
	imports: [],
	exports: [AutosizeDirective,Elastic]
})
export class DirectivesModule {}
