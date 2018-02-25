import { Injectable } from '@angular/core';

@Injectable()
export class ConversorProvider {
    toBinary(num: string){
        console.log(parseInt(num, 2));
        console.log(parseInt(num, 2).toString());
        return parseInt(num, 2).toString();
    }
    toDecimal(num: string){
        console.log(parseInt(num, 2));
        console.log(parseInt(num, 2).toString());
        return parseInt(num, 10).toString();
    }
    toHexadecimal(num: string){
        console.log(parseInt(num, 2));
        console.log(parseInt(num, 2).toString());        
        return parseInt(num, 16).toString();
    }
}