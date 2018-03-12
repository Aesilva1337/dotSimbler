import { Injectable } from "@angular/core";
 
@Injectable()
export class Conversor {
    toBinary(num){
        return (+num).toString(2).substring(0,7);
    }
    toDecimal(num,base:number){
        return parseInt(num,base).toString().substring(0,7);
    }
    toHexadecimal(num){     
        return (+num).toString(16).substring(0,7);
    }
}