import { Registrador } from './../registrador/registrador';
import { Injectable } from '@angular/core';
@Injectable()
export class UnidadeLogicaAritmetica{
    constructor(private reg:Registrador){
    }


    add(reg,x){
        let valor = this.reg[reg] += x;
        this.reg.verify(valor); 
        return valor;
    }
    sub(reg,x){
        let valor = this.reg[reg] -= x;
        this.reg.verify(valor); 
        return valor;
    }
    mul(reg,x){
        let valor = this.reg[reg] *= x;
        this.reg.verify(valor); 
        return valor;
    }
    div(reg,x){
        let valor = this.reg[reg] /= x;
        this.reg.verify(valor); 
        return valor;
    }
    inc(reg,x){
        let valor = this.reg[reg]++;
        this.reg.verify(valor); 
        return valor;
    }
    dec(reg,x){
        let valor = this.reg[reg]--;
        this.reg.verify(valor); 
        return valor;
    }
    or(reg,x){
        let valor = this.reg[reg] |= x;
        this.reg.verify(valor); 
        return valor;
    }
    and(reg,x){
        let valor = this.reg[reg] &= x;
        this.reg.verify(valor); 
        return valor;
    }
    not(reg){
        let valor = this.reg[reg] = ~this.reg[reg];
        this.reg.verify(valor); 
        return valor;
    }
    store(reg){
        let valor = (this.reg[reg] = this.reg.AX);
        this.reg.verify(valor); 
        return valor;
    }
    load(x){
        let valor = this.reg.AX = x;    
        this.reg.verify(valor); 
        return valor;
    }
    cmp(reg,x){
        let valor = this.reg[reg] - x;
        this.reg.verify(valor); 
        return valor;
    }


}