import { ValueInterface } from "./value";

export class Memory implements ValueInterface{
    private value:number;
    getValue():number{
        return this.value;
    }
} 