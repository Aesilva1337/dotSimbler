import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompiladorPage } from './compilador';

@NgModule({
  declarations: [
    CompiladorPage,
  ],
  imports: [
    IonicPageModule.forChild(CompiladorPage),
  ],
})
export class CompiladorPageModule {}
