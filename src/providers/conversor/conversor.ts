import { Injectable } from "@angular/core";
 
@Injectable()
export class Conversor {
    toBinary(num){
        return (+num).toString(2);
    }
    toDecimal(num,base:number){
        return parseInt(num,base).toString();
    }
    toHexadecimal(num){     
        return (+num).toString(16);
    }
}