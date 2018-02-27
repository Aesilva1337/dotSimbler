import { Injectable } from "@angular/core";

@Injectable()
export class MemoriaProvider{
    public memory:Map<number , any>; 
    
    private offset:number = 1;

    constructor(){
    }

    clean(){
        this.memory = new Map<number,any>();
        this.offset = 1;
    }

    getKeys(){
        return Array.from(this.memory.keys());
    }

    setMemory(line:number,value){
        this.memory.set(line,value);
    }
    setLine(value){
        this.offset = value;
    }
    getLine(){
       return this.offset;
    }
    lineOperation(){
        return this.memory.get(this.offset);
    }
}