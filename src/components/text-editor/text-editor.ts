import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ModalOptions } from 'ionic-angular/components/modal/modal-options';
import { ViewController } from 'ionic-angular/navigation/view-controller';


@Component({
  selector: 'text-editor',
  templateUrl: 'text-editor.html'
})
export class TextEditorComponent {

  myModalOptions:ModalOptions={
    enableBackdropDismiss:false
  }
  text: string;
  public op:any;
  constructor(public modalCtrl: ModalController) {
    console.log('Hello TextEditorComponent Component');
    this.text = 'Hello World';
  }

  public getValor(en:any){
      this.modalCtrl.create(ModalContent,{x:en.target.value}
      ,this.myModalOptions).present();
  }

}


@Component({
  template: `
  <ion-header>
  <ion-navbar>
    <ion-title>
      DOT.SIMBLER
    </ion-title>
    <ion-buttons end>
      <button ion-button (click)="close()" >close</button>
    </ion-buttons>
  </ion-navbar>
</ion-header>
<ion-content padding>
  <ion-item>{{val}}</ion-item>
</ion-content>
  `
})
export class ModalContent {
  public val:string;
  constructor(public params: NavParams,
  private viewCtlr:ViewController){
    this.val = params.get("x");
  }

  public close(){
    this.viewCtlr.dismiss();
  }
}

