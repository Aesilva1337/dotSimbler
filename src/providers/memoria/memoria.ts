import { Memory } from './../cpu/memory';
import { Injectable } from "@angular/core";

@Injectable()
export class MemoriaProvider{
    
    private memoria:Map<number,Memory>;
    
    constructor(){
        this.memoria = new Map<number,Memory>();
    }

    set(posicao:number,memoria:Memory){
        this.memoria.set(posicao,memoria);
    }

    get(posicao:number){
        return this.memoria.get(posicao);
    }
}