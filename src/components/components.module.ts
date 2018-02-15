import { NgModule } from '@angular/core';
import { TextEditorComponent } from './text-editor/text-editor';
import { Commands } from '../providers/commands/commands';

@NgModule({
	declarations: [TextEditorComponent],
	imports: [],
	exports: [TextEditorComponent],
	providers: [Commands]
})
export class ComponentsModule {}
