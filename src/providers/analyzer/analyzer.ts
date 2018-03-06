import { LineOperation } from './../cpu/lineOperation';
import { Operation } from './../cpu/operation';
import { Comandos } from '../cpu/comandos';
import { Injectable } from '@angular/core';
@Injectable()
export class Analyzer{
    constructor(private commands:Comandos){}

    analyzer(text:string){
        let ops:LineOperation[] = this.generateLinesOperations(text);
        
        let erros = ops.filter(e => {
            if(e.error){
                return e;
            }
        });


        if(!text.match('HLT')){
            let newLine = new LineOperation();
            newLine.error = true;
            newLine.msgErro = "HLT não declarado";
            newLine.line = ops[ops.length-1].line;
            erros.push(newLine);
        }

        return [ops,erros];
    }
    
    private generateLinesOperations(text:string){
        console.log("Comandos:\n"+text);
        let countLine=0;
        let arrayLineOperation:LineOperation[]=[];

        (text.split("\n")).forEach(e => {
            let sub = e.split(" ");
            sub=sub.filter((value,index,array)=>{
                if(value !== ""){
                    return value;
                }
            });
            
            let val = null;
            if(sub.length > 1)
                val = sub[1];

            let lineOp = new LineOperation();
            let op = new Operation(sub[0],val);
            lineOp.line = countLine++;
            lineOp.operation = op;

            if(sub.length>2){
                lineOp.error = true;
                lineOp.msgErro = "Contém mais de 2 instruções.";
            } else if(!this.isValidCommand(sub[0])||
            !this.isValidCommand(val)){
                lineOp.error = true;
                lineOp.msgErro = "Comando invalido.";
            }


            arrayLineOperation.push(lineOp);
        });

        return arrayLineOperation;
    }

    private isValidCommand(command:string){
        if(command!=null){
            return this.commands.contains(command)||
            command.match('@\\d+') ||
            command.match('\\d+') ;
        }
        return true;
    }

    isComando(text:string){
        return this.commands.contains(text.trim());
    }
}