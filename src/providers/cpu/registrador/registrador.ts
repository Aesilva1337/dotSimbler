import { Injectable } from '@angular/core';
@Injectable()
export class Registrador {

    AX:any = 0;
    BX:any =0;
    CX:any = 0;
    DX:any = 0;
    O:any = false;
    Z:any = false;
    S:any = false;
    PC:any = 0;
    
    constructor() {
    }

    SET(reg,value){
        this[reg] = value;
    }
    
    public verify(value){
        this.Z = value == 0;
        this.O = (value < -255 || value > 255);
        this.S = value < 0;
    }

    copy(){
        let s = {
        'AX':this.AX,
        'BX':this.BX,
        'CX':this.CX,
        'DX':this.DX,
        'O':this.O,
        'Z':this.Z,
        'S':this.S,
        'PC':this.PC};
        
        return s;
    }
    set(reg){
        this.AX = reg.AX;
        this.BX = reg.BX;
        this.CX = reg.CX;
        this.DX = reg.DX;
        this.O = reg.O;
        this.Z = reg.Z;
        this.S = reg.S;
        this.PC = reg.PC;

    }
}