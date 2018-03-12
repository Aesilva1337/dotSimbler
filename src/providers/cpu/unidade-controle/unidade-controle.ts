import { Registrador } from './../registrador/registrador';
import { Comandos } from './../comandos';
import { Memoria } from './../memoria/memoria';
import { Injectable } from '@angular/core';
import { copyInputAttributes } from 'ionic-angular/util/dom';

@Injectable()
export class UnidadeControle{
    constructor(private registrador:Registrador,
    private memoria:Memoria,
    private comandos:Comandos){

    }
    lastReg = new Array();
    reset(){
       this.lastReg = new Array();
       this.registrador.PC=0;
       this.registrador.AX=0;
       this.registrador.BX=0;
       this.registrador.CX=0;
       this.registrador.DX=0;
       this.registrador.O = false;
       this.registrador.Z = false;
       this.registrador.S = false;
    }

    hasOperation(){
        let hasProximo = this.registrador.PC >= 0 ? true:false;
        return hasProximo;
    }
    executarOperation():boolean{
        if(this.hasOperation()){
            this.lastReg.push(this.registrador.copy());
            let pc = this.registrador.PC;
            let op = this.memoria.getOperation(pc);
            if(op.operation.command != undefined){
                    let execOp = this.comandos.get(op);
                    execOp();
            }
            if (this.hasOperation()){
                this.registrador.PC++;
            }
            return true;
        }
        return false;
    }

    voltarOperation(){
        if(this.registrador.PC > 0){
            let  c = this.lastReg.pop();
           this.registrador.set(c);
           return true;
        }
        return false;
    }

}