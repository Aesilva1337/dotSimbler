import { Analyzer } from './../providers/analyzer/analyzer';
import { ConversorProvider } from './../providers/conversor/conversor';
import { NgModule } from '@angular/core';
import { TextEditorComponent } from './text-editor/text-editor';
import { Commands } from '../providers/commands/commands';
import { IonicModule } from 'ionic-angular/module';

@NgModule({
	declarations: [],
	imports: [IonicModule],
	exports: [],
	providers: [Commands,ConversorProvider,Analyzer]
})
export class ComponentsModule {}
