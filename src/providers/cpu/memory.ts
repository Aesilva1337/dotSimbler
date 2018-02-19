import { ValueInterface } from "./value";

export class Memory{
    public memory:Map<number , any>; 
    
    private offset:number = 1;
    private size:number = 1;

    setMemory(value){
        this.memory.set(this.size++,value);
    }

    setLine(value){
        this.offset = value;
    }
} 