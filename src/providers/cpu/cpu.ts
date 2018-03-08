import { LineOperation } from './lineOperation';
import { Memoria } from './memoria/memoria';
import { UnidadeControle } from "./unidade-controle/unidade-controle";
import { Injectable } from '@angular/core';

@Injectable()
export class CPU{

    private pause = false;

    constructor(private unidadeControle: UnidadeControle,
        private memoria:Memoria){

    }
    lineOperations:LineOperation;
    public setLineOperations(lineOperations) {
        this.unidadeControle.reset();
        this.lineOperations = lineOperations;
        this.memoria.map(lineOperations);
    }
    
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    parar(){
        this.pause = true;
    }

    async processarOperations(callback){
        this.pause =false;
        while(callback.printLine()&&this.unidadeControle.executarOperation() && !this.pause){
            await this.sleep(+callback.rangeSpeed*10); 
            callback.changeSaida();
        };
    }

    proximaOperation(callback){
        callback.printLine();
        this.unidadeControle.executarOperation();
        callback.changeSaida();
    }
    voltarOperation(callback){
        callback.printLine()
        this.unidadeControle.voltarOperation();
        callback.changeSaida();
    }
}