import { Operation } from './operation';

export class LineOperation{
    public line:number;
    public operation:Operation;
    public value:number;
    public error:boolean = false;
    public msgErro:string;

    constructor(){
        
    }
}