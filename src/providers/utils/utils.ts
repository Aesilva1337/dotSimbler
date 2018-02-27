import { CommandsProvider } from './../cpu/commands';
import { LineOperation } from './../cpu/lineOperation';
import { Operation } from './../cpu/operation';
export class Utils{

    constructor(private commands:CommandsProvider){

    }

    generateLinesOperations(text:string){
        console.log(text);
        let countLine=0;
        let arrayLineOperation:LineOperation[]=[];
        (text.split("\n")).forEach(e => {
            console.log(e);
            let sub = e.split(" ");
            sub=sub.filter((value,index,array)=>{
                if(value !== ""){
                    return value;
                }
            });
            
            let lineOp = new LineOperation();
            let op = new Operation(sub[0],sub[1]);
            console.log("T:",sub);
            lineOp.line = ++countLine;
            lineOp.operation = op;

            if(sub.length>2 || 
                !this.isValidCommand(sub[0]) ||
                !this.isValidCommand(sub[1])){
                lineOp.error = true;    
            }

            arrayLineOperation.push(lineOp);
        });
        return arrayLineOperation;
    }

    isValidCommand(command:string){
        return this.commands.contains(command)||
            command.match('@\\d+') ||
            command.match('\\d+') ;
    }
}