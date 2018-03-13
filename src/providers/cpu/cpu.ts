import { LineOperation } from './lineOperation';
import { Memoria } from './memoria/memoria';
import { UnidadeControle } from "./unidade-controle/unidade-controle";
import { Injectable } from '@angular/core';

@Injectable()
export class CPU{

    private ispause = false;

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

    pause(){
        this.ispause = true;
    }

    stop(callback){
        this.unidadeControle.reset();
        callback.printLine();
        callback.changeSaida();
    }

    async processarOperations(callback){
        callback.printLine();
        this.ispause =false;
        while( !this.ispause && (this.unidadeControle.executarOperation() && callback.printLine()) ){
            await this.sleep(+callback.rangeSpeed*10); 
            callback.changeSaida();
        };
    }

    proximaOperation(callback){
        this.unidadeControle.executarOperation();
        callback.printLine();
        callback.changeSaida();
    }
    voltarOperation(callback){
        if(this.unidadeControle.voltarOperation()){
            callback.printLine();
            callback.changeSaida();
        }
    }
}