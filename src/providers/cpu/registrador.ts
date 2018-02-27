import { ValueInterface } from "./value";

export class Registrador implements ValueInterface{
    public value:number = 0;
    getValue():number{
        return this.value;
    }

    constructor(){}

    add(x){
        return this.value += x;
    }
    sub(x){
        return this.value -= x;
    }
    mul(x){
        return this.value *= x;
    }
    div(x){
        return this.value /= x;
    }
    inc(x){
        return this.value++;
    }
    dec(x){
        return this.value--;
    }
    or(x){
        return this.value |= x;
    }
    and(x){
        return this.value &= x;
    }
    not(){
        return this.value = ~this.value;
    }
    store(x){
        return this.value = x;
    }
    load(x){
        return this.store(x);    
    }
    cmp(x){
        return this.value - x;
    }

}