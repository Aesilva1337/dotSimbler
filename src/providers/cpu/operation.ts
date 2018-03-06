export class Operation{
    command:string;
    value:any;
    
    constructor(commands,value){
        this.command = commands;
        this.value = value;
    }
}