import { ValueInterface } from './value';

export class Number implements ValueInterface{
    private value:number;
    getValue():number{
        return this.value;
    }
    setValue(value:number){
        this.value = value;
    }
}