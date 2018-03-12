import { LineOperation } from './../cpu/lineOperation';
import { Operation } from './../cpu/operation';
import { Comandos } from '../cpu/comandos';
import { Injectable } from '@angular/core';
@Injectable()
export class Analyzer{
    constructor(private commands:Comandos){}

    analyzer(text:string){
        text = text.toUpperCase();
        let ops:LineOperation[] = this.generateLinesOperations(text);
        
        let erros;

        if(ops.length < 2){
            let newLine = new LineOperation();
            newLine.error = true;
            newLine.msgErro = "Precisa-se no minímo 2 comandos.";
            newLine.line = 0;
            erros = [newLine];
        }
        else if(!text.match('HLT')){
            let newLine = new LineOperation();
            newLine.error = true;
            newLine.msgErro = "HLT não declarado";
            newLine.line = ops[ops.length-1].line;
            erros = [newLine];
        }
        else{
        erros = (ops.filter(e => {
            if(e.error){
                return e;
            }
        }));
    }
        return [ops,erros];
    }
    
    private generateLinesOperations(text:string){
        let countLine=0;
        let arrayLineOperation:LineOperation[]=[];
        (text.split("\n")).forEach(e => {
            let sub = e.split(" ");
            sub=sub.filter((value,index,array)=>{
                if(value != ""){
                    return value;
                }
            });
            
            

            let val = "";
            if(sub.length > 1)
                val = sub[1];

            let lineOp = new LineOperation();
            let op = new Operation(sub[0],val);
            lineOp.line = countLine++;
            lineOp.operation = op;

            if(sub.length>2){
                lineOp.error = true;
                lineOp.msgErro = "Contém mais de 2 instruções.";
            }

            if(sub.length != 0){
                
            
            if(!this.isValidCommand(sub[0]) ||
                val!=""?!this.isValidCommand(val): 
                !this.commands.isOneCommand(sub[0])){
                    lineOp.error = true;
                    lineOp.msgErro = "Comando invalido.";
            }
        }
            arrayLineOperation.push(lineOp);
        });

        return arrayLineOperation;
    }

    private isValidCommand(command:string){
        if(command!=null){
            return this.isComando(command)||
            command.match('^@\\d+') ||
            command.match('^\\d+') ;
        }
        return true;
    }

    isComando(text:string){
        return this.commands.contains(text.trim());
    }
}