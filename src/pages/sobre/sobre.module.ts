import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SobrePage } from './sobre';

@NgModule({
  declarations: [
    SobrePage,
  ],
  imports: [
    IonicPageModule.forChild(SobrePage),
  ],
})
export class SobrePageModule {}
