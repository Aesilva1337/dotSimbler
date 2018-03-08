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

  public error(msg,line) {
      let toast = this.toastCtrl.create({
        message: "Erro Linha["+line+"]: "+msg,
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

    console.log("ERROS:"+lineopErro.length);
    if(lineopErro.length > 0){
      document.getElementById("i"+lineopErro[0].line)
         .classList.add("erro1");
         this.error(lineopErro[0].msgErro,lineopErro[0].line);
    }else{
      if(document.getElementsByClassName("erro1").length>0)
      document.getElementsByClassName("erro1").item(0)
         .classList.remove("erro1");
      this.cpu.setLineOperations(this.lineop);
      this.cpu.processarOperations(this);
    }


  }

  public printLine(){
    if(document.getElementsByClassName("pass").length>0){
      document.getElementsByClassName("pass").
      item(0).classList.remove("pass");
     
    }
    if(this.reg.PC != -1){
    document.getElementById("i"+this.reg.PC)
    .classList.add("pass");
    }
    return true;
  }

  LEFTPAD(value: string) {
    return "00000000".substr(value.length) + value;
  }
  changeSaida() {
    switch (this.tipoSaida) {
      case "0": {
        this.regAx = this.reg.DX;
        this.regBx = this.reg.CX;
        this.regCx = this.reg.BX;
        this.regDx = this.reg.DX;
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
