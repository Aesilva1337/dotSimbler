import { LineOperation } from './../lineOperation';
import { Injectable } from '@angular/core';
@Injectable()
export class Memoria{
    constructor(){
    }

    public lineOperation = new  Map<number,LineOperation>();
    
    map(lineOperation:LineOperation[]){
        lineOperation.forEach(e => {
            this.lineOperation.set(e.line,e);
        });
    }

    getOperation(line:number):LineOperation{
        if(this.lineOperation.has(line))
            return this.lineOperation.get(line);
        return null;
    }
}