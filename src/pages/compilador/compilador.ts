import { LineOperation } from './../../providers/cpu/lineOperation';
import { CPU } from './../../providers/cpu/cpu';
import { Registrador } from './../../providers/cpu/registrador/registrador';
import { Conversor } from './../../providers/conversor/conversor';
import { Component, Output } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Analyzer } from '../../providers/analyzer/analyzer';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

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
  text: string = "";
  val = 1;
  line:any = ["x"];


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public conversor: Conversor,
    public reg: Registrador,
    public cpu: CPU,
    private anl: Analyzer,
    public toastCtrl: ToastController) {

  }
   lineop;

  public error(msg) {
      let toast = this.toastCtrl.create({
        message: "Error: "+msg,
        duration: 3000,
        position: 'top'
      });
      toast.present();
  }
 

  lineUp() {
    this.line = this.text.split('\n');
  }

  prox(){
    this.cpu.proximaOperation(this);
  }
  voltar(){
    this.cpu.voltarOperation(this);
  }
  parar(){
    this.cpu.parar();
  }

  async play() {
    let result = this.anl.analyzer(this.text);
    this.lineop = result[0];
    let lineopErro = result[1];

    console.log(lineopErro.length);
    if(lineopErro.length > 0){
        document.getElementById(""+lineopErro[0].line)
        .classList.add("erro") ;
        document.getElementById(""+lineopErro[0].line)
        .addEventListener('click',(e)=>{
           this.error(lineopErro[0].msgErro);
        });
    }else{
      this.cpu.setLineOperations(this.lineop);
      this.cpu.processarOperations(this);
    }


  }

  LEFTPAD(value: string) {
    return "00000000".substr(value.length) + value;
  }
  changeSaida() {
    switch (this.tipoSaida) {
      case "0": {
        this.regAx = this.conversor.toDecimal(this.reg.DX, 2);
        this.regBx = this.conversor.toDecimal(this.reg.CX, 2);
        this.regCx = this.conversor.toDecimal(this.reg.BX, 2);
        this.regDx = this.conversor.toDecimal(this.reg.DX, 2);
        break;
      }
      case "1": {
        this.regAx = this.LEFTPAD(this.conversor.toBinary(this.reg.AX));
        this.regBx = this.LEFTPAD(this.conversor.toBinary(this.reg.BX));
        this.regCx = this.LEFTPAD(this.conversor.toBinary(this.reg.CX));
        this.regDx = this.LEFTPAD(this.conversor.toBinary(this.reg.DX));
        break;
      }
      case "2": {
        this.regAx = this.conversor.toHexadecimal(this.reg.AX).toUpperCase();
        this.regBx = this.conversor.toHexadecimal(this.reg.BX).toUpperCase();
        this.regCx = this.conversor.toHexadecimal(this.reg.CX).toUpperCase();
        this.regDx = this.conversor.toHexadecimal(this.reg.DX).toUpperCase();
        break;
      }
    }
  }
}
