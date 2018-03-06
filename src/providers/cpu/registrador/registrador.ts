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
        this.O = (value < -256 || value > 256);
        this.S = value < 0;
    }
}