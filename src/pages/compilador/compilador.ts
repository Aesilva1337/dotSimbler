import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConversorProvider } from '../../providers/conversor/conversor';

/**
 * Generated class for the CompiladorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compilador',
  templateUrl: 'compilador.html',
})
export class CompiladorPage {

  tipoEntrada: string = "2";
  tipoSaida: string = "1";
  rangeSpeed: string = "250";
  regAx: string = "10010100";
  regBx: string = "00000010";
  regCx: string = "00010100";
  regDx: string = "01010000";
  conversor: ConversorProvider;

  constructor(public navCtrl: NavController, public navParams: NavParams, public conversorProvider: ConversorProvider) {
    this.conversor = this.conversorProvider;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompiladorPage');    
  }

  changeSaida(){
    switch(this.tipoSaida){
      case "0":{
        this.regAx = this.conversor.toDecimal(this.regAx);
        this.regBx = this.conversor.toDecimal(this.regBx);
        this.regCx = this.conversor.toDecimal(this.regCx);
        this.regDx = this.conversor.toDecimal(this.regDx);
        break;
      }
      case "1":{
        this.regAx = this.conversor.toBinary(this.regAx);
        this.regBx = this.conversor.toBinary(this.regBx);
        this.regCx = this.conversor.toBinary(this.regCx);
        this.regDx = this.conversor.toBinary(this.regDx);
        break;
      }
      case "2":{
        this.regAx = this.conversor.toHexadecimal(this.regAx);
        this.regBx = this.conversor.toHexadecimal(this.regBx);
        this.regCx = this.conversor.toHexadecimal(this.regCx);
        this.regDx = this.conversor.toHexadecimal(this.regDx);
        break;
      }
    }
  }
}
