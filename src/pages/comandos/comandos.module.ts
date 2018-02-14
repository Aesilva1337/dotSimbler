import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComandosPage } from './comandos';

@NgModule({
  declarations: [
    ComandosPage,
  ],
  imports: [
    IonicPageModule.forChild(ComandosPage),
  ],
})
export class ComandosPageModule {}
