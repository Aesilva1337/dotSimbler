import { RegistradorGeralProvider } from './../registrador-geral/registrador-geral';
import { RegistradorEstadoProvider } from './../registrador-estado/registrador-estado';
import { Registrador } from '../cpu/registrador';
export class StateOperation {
    private states:Array<any> = new Array<any>();
    constructor(private regE:RegistradorEstadoProvider,
                private regG:RegistradorGeralProvider
    ) {
        
    }
    private cp(val){
        return Object.assign(new Registrador(),val);
    }
    push(line){
      let obj = {
        line,
        AX : this.cp(this.regG.AX),
        BX : this.cp(this.regG.BX),
        CX : this.cp(this.regG.CX),
        DX : this.cp(this.regG.DX),
        S : this.regE.SINAL,
        O : this.regE.OVERFLOW,
        Z : this.regE.ZERO
        };
        this.states.push(obj);
    }
    pop(){
        this.states.pop();
        let obj =  this.states[this.states.length-1];
        this.regG.AX = obj.AX;
        this.regG.BX = obj.BX;
        this.regG.CX = obj.CX;
        this.regG.DX = obj.DX;
        this.regE.SINAL = obj.S;
        this.regE.OVERFLOW = obj.O;
        this.regE.ZERO = obj.Z;
        return obj.line;
    }
}