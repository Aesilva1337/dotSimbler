import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompiladorPage } from './compilador';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CompiladorPage
  ],
  imports: [
    IonicPageModule.forChild(CompiladorPage),
    ComponentsModule
    ],
})
export class CompiladorPageModule {}
