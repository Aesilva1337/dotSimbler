import { AppModule } from './../../app/app.module';
import { ValueInterface } from './../../providers/cpu/value';
import { RegistradorEstadoProvider } from './../../providers/registrador-estado/registrador-estado';
import { RegistradorGeralProvider } from './../../providers/registrador-geral/registrador-geral';
import { Number } from './../../providers/cpu/number';
import { CpuProvider } from './../../providers/cpu/cpu';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public valor:string = "";
  
  constructor(public navCtrl: NavController,
  public cpu:CpuProvider,
  public reg:RegistradorGeralProvider,
  public regS:RegistradorEstadoProvider) {

  }

  exec(){
    let str = this.valor.split('\n');
    str.forEach(element => {
        let p = element.split(" ");
        let t = new class x implements ValueInterface{
          getValue(){
            return p[1];
          }
        };

        this.cpu.execute(p[0],t);
        console.log("AX:"+this.reg.AX.getValue());
        console.log("BX:"+this.reg.BX.getValue());
        console.log("Z:"+this.regS.ZERO);
        console.log("S:"+this.regS.SINAL);
        console.log("O:"+this.regS.OVERFLOW);
    });
  }

}
