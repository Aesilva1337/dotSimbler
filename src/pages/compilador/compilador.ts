import { Analyzer } from './../../providers/analyzer/analyzer';
import { CpuProvider } from './../../providers/cpu/cpu';
import { RegistradorGeralProvider } from './../../providers/registrador-geral/registrador-geral';
import { Component,Output } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConversorProvider } from '../../providers/conversor/conversor';
import { RegistradorEstadoProvider } from '../../providers/registrador-estado/registrador-estado';

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

  regAx: string = "00000000";
  regBx: string = "00000000";
  regCx: string = "00000000";
  regDx: string = "00000000";
  conversor: ConversorProvider;

  text:string = "";


  val = 1;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public conversorProvider: ConversorProvider,
    public reg:RegistradorGeralProvider,
    public cpu:CpuProvider,
    private anl:Analyzer,
    public regE:RegistradorEstadoProvider) {
    this.conversor = this.conversorProvider;
  }


   sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  async play(){
    let result = this.anl.analyzer(this.text);
    let lineop = result[0];
    let lineopErro = result[1];
    this.cpu.mapMemory(lineop);
    for(let i=0;i<lineop.length; i++){
      this.cpu.next();
      this.changeSaida();
      await this.sleep(+this.rangeSpeed*10); 
    }
      
  }

  LEFTPAD(value:string){
    return "00000000".substr(value.length)+value;
  }
  changeSaida(){
    switch(this.tipoSaida){
      case "0":{
        this.regAx = this.conversor.toDecimal(this.reg.DX.getValue(),2);
        this.regBx = this.conversor.toDecimal(this.reg.CX.getValue(),2);
        this.regCx = this.conversor.toDecimal(this.reg.BX.getValue(),2);
        this.regDx = this.conversor.toDecimal(this.reg.DX.getValue(),2);
        break;
      }
      case "1":{
        this.regAx = this.LEFTPAD(this.conversor.toBinary(this.reg.AX.getValue()));
        this.regBx = this.LEFTPAD(this.conversor.toBinary(this.reg.BX.getValue()));
        this.regCx = this.LEFTPAD(this.conversor.toBinary(this.reg.CX.getValue()));
        this.regDx = this.LEFTPAD(this.conversor.toBinary(this.reg.DX.getValue()));
        break;
      }
      case "2":{
        this.regAx = this.conversor.toHexadecimal(this.reg.AX.getValue()).toUpperCase();
        this.regBx = this.conversor.toHexadecimal(this.reg.BX.getValue()).toUpperCase();
        this.regCx = this.conversor.toHexadecimal(this.reg.CX.getValue()).toUpperCase();
        this.regDx = this.conversor.toHexadecimal(this.reg.DX.getValue()).toUpperCase();
        break;
      }
    }
  }
}
