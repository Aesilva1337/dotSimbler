import { Component, Injectable } from '@angular/core';

@Injectable()
export class Commands {
    list = [
        {
            comando:"ADD",
            desc: "Adiciona o valor especificado ao registrador acumulador (AX).",
            exemplos:[
                "ADD 30 - Adiciona o valor 30 no registrador acumulador.", 
                "ADD BX - Adiciona o valor do registrador BX no registrador acumulador.",
                "ADD @5 - Adiciona o valor do endereço 5 no registrador acumulador."
            ]
        }
    ];
    constructor(parameters) {
        
    }
}