import { ConversorProvider } from './../conversor/conversor';
import { CommandsProvider } from './../cpu/commands';
import { LineOperation } from './../cpu/lineOperation';
import { Operation } from './../cpu/operation';
import { Injectable } from '@angular/core';

@Injectable()
export class Analyzer{
    constructor(private commands:CommandsProvider,
                private conversor:ConversorProvider){}

    analyzer(text:string){
        let ops:LineOperation[] = this.generateLinesOperations(text);
        
        let erros = ops.filter(e => {
            if(e.error){
                return e;
            }
        })
        return [ops,erros];
    }
    
    private generateLinesOperations(text:string){
        console.log("generateLinesOperations()"+text);
        let countLine=0;
        let arrayLineOperation:LineOperation[]=[];
        (text.split("\n")).forEach(e => {
            let sub = e.split(" ");
            sub=sub.filter((value,index,array)=>{
                if(value !== ""){
                    return value;
                }
            });
            
            let val = sub[1];
            console.log("->"+val);
            let lineOp = new LineOperation();
            let op = new Operation(sub[0],val);
            lineOp.line = ++countLine;
            lineOp.operation = op;

            if(sub.length>2 || 
                !this.isValidCommand(sub[0]) ||
                !this.isValidCommand(val)){
                lineOp.error = true;    
            }

            arrayLineOperation.push(lineOp);
        });
        return arrayLineOperation;
    }

    private isValidCommand(command:string){
        return this.commands.contains(command)||
            command.match('@\\d+') ||
            command.match('\\d+') ;
    }
}