import { Comandos } from './../comandos';
import { Memoria } from './../memoria/memoria';
import { Registrador } from "../registrador/registrador";
import { Injectable } from '@angular/core';
import { copyInputAttributes } from 'ionic-angular/util/dom';

@Injectable()
export class UnidadeControle{
    constructor(private registrador:Registrador,
    private memoria:Memoria,
    private comandos:Comandos){

    }
    lastReg:Registrador;
    reset(){
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
        let hasProximo = this.registrador.PC !== -1? true:false;
        return hasProximo;
    }
    executarOperation():boolean{
        console.log('PC:'+this.registrador.PC);
        console.log('AX:'+this.registrador.AX);
        console.log('BX:'+this.registrador.BX);
        console.log('CX:'+this.registrador.CX);
        console.log('DX:'+this.registrador.DX);
        console.log('O:'+this.registrador.O);
        console.log('Z:'+this.registrador.Z);
        console.log('S:'+this.registrador.S);
        this.lastReg = Object.assign({}, this.registrador);
        console.log(this.lastReg);

        if(this.hasOperation()){
            let pc = this.registrador.PC++;
            let op = this.memoria.getOperation(pc);
            console.log("op",op);
            if(op!==null){
                let execOp = this.comandos.get(op);
                execOp();
            }
            return true;
        }

        return false;
    }

    voltarOperation(){
        if(this.registrador.PC > 0){
            this.registrador = this.lastReg;
        }
    }

}