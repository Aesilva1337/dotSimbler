import { Component, Injectable } from '@angular/core';

@Injectable()
export class Commands {
    getList(){
        return this.list;
    }
  
    constructor(private list:any) {
        this.list = [
            {
                comando:"ADD",
                desc: ["Adiciona o valor especificado ao registrador acumulador (AX)."],
                exemplos:[
                    "ADD 30 - Adiciona o valor 30 no registrador acumulador.", 
                    "ADD BX - Adiciona o valor do registrador BX no registrador acumulador.",
                    "ADD @5 - Adiciona o valor do endereço 5 no registrador acumulador."
                ]
            },
            {
                comando:"AND",
                desc:["Faz a operação (and) com valor atual do registrador acumulador (AX) e o valor especificado."],
                exemplos:[
                    "AND 100 - Efetua o operador AND com o valor atual do registrador acumulador e 100.",
                    "AND @5 - Efetua o operador AND com o valor atual do registrador acumulador e o valor do endereço 5.",
                    "AND BX - Efetua o operador AND com o valor atual do registrador acumulador e o valor do registrador BX."
                ]
            },
            {
                comando:"CMP",
                desc:["Compara o valor do registrador acumulador (AX) com o valor especificado.  O resultado dessa operação afetará os sinalizadores (Zero e Sinal), dependendo de seu resultado.",
                    "Caso o valor do registrador acumulador seja igual ao valor comparado, resultará num valor '0' e o sinalizador Zero será ligado.",
                    "Caso o valor do registrador acumulador seja menor do que o valor comparado, resultará num valor negativo e o sinalizador Sinal será ligado.",  
                    "Caso o valor do registrador acumulador seja maior do que o valor comparado, resultará num valor positivo e o sinalizador Sinal não será ligado."],  
                exemplos:["CMP 100 - Compara o valor do registrador acumulador com 100"]
            },
            {
                comando:"DB",
                desc:["DB ou (Define Byte) aloca um valor numérico na posição de memória onde especificado."], 
                exemplos:["DB 12 - Define o valor 12 na posição de memória onde for escrito."]
            },
            {
                comando:"DEC",
                desc:["Decrementa em '1' o valor do campo definido."],
                exemplos:[
                    "DEC AX - Decrementa em '1' o valor do registrador AX.",
                    "DEC @4 - Decrementa em '1' o valor do endereço 4."
                ]
            },
            {
                comando:"DIV",
                desc:["Divide o valor do registrador acumulador (AX) pelo valor especificado."],  
                exemplos:[
                    "DIV 100 - Divide o valor atual do registrador acumulador por 100.",
                    "DIV @5 - Divide o valor atual do registrador acumulador pelo valor do endereço 5.",
                    "DIV BX - Divide o valor de atual do registrador acumulador pelo valor do registrador BX."]
            },
            {
                comando:"HLT",
                desc:["Encerra a execução do programa."],
                exemplos:[]
            },
            {
                comando:"INC",
                desc:["Incrementa em '1' o valor do campo definido."],
                exemplos:[
                    "INC AX - Incrementa em '1' o valor do registrador acumulador (AX).",
                    "INC @4 - Incrementa em '1' o valor do endereço 4."
                ]
            },
            {
                comando:"JMP",
                desc:["Desvia o programa para o endereço especificado."],
                exemplos:["JMP 5 - Desvia o programa para o endereço 5."]
            },
            {
                comando:"JNO",
                desc:["Desvia o programa para o endereço especificado se o sinalizador Overflow estiver em '0'"],
                exemplos:["JNO 5 - Desvia o programa para o endereço 5 se o sinalizador Overflow estiver em '0'."]
    
            },
            {
                comando:"JNS",
                desc:["Desvia o programa para o endereço especificado se o sinalizador Sinal estiver em '0'"],
                exemplos:["JNS 5 - Desvia o programa para o endereço 5 se o sinalizador Sinal estiver em '0'."]
            },
            {
                comando:"JNZ",
                desc:["Desvia o programa para o endereço especificado se o sinalizador Zero estiver em '0'."],  
                exemplos:["JNZ 5 - Desvia o programa para o endereço 5 se o sinalizador Zero estiver em '0'."]
            },
            {
                comando:"JO",
                desc:["Desvia o programa para o endereço especificado se o sinalizador Overflow estiver em '1'"], 
                exemplos:["JO 5 - Desvia o programa para o endereço 5 se o sinalizador Overflow estiver em '1'."]
            },
            {
                comando:"JS",
                desc:["Desvia o programa para o endereço especificado se o sinalizador Sinal estiver em '1'"],
                exemplos:["JS 5 - Desvia o programa para o endereço 5 o sinalizador Sinal estiver em '1'"]
            },
            {
                comando:"JZ",
                desc:["Desvia o programa para o endereço especificado se o sinalizador Zero estiver em '1'"],
                exemplos:["JZ 5 - Desvia o programa para o endereço 5 se o sinalizador Zero estiver em '1'"]
            },
            {
                comando:"LOAD",
                desc:["Armazena o valor especificado no registrador acumulador (AX)."],
                exemplos:[
                    "LOAD 30 - Carrega o valor 30 no registrador acumulador.",
                    "LOAD @5 - Carrega o valor do endereço 5 no registrador acumulador.",
                    "LOAD BX - Carrega o valor do registrador BX no registrador acumulador."
                ]
            },
            {
                comando:"MUL",
                desc:["Multiplica o valor do registrador acumulador (AX) pelo valor especificado."],
                exemplos:[  
                    "MUL 100 - Multiplica o valor atual de AX por 100.",
                    "MUL @5 - Multiplica o valor atual de AX pelo valor do endereço 5.",
                    "MUL BX - Multiplica o valor de atual AX pelo valor do registrador BX."
                ]
            },
            {
                comando:"NOP",
                desc:["NOP ou 'No Operation Peformed' é uma instrução comumente usada para operações com temporizadores.  Não efetua nenhuma operação."],
                exemplos:[]
            },
            {
                comando:"NOT",
                desc:["Efetua a operação 'NOT' com o valor atual do registrador acumulador (AX)."],
                exemplos:[  
                    "LOAD 01010101 - Armazena o valor 01010101 em AX.",
                    "NOT - Nega o valor armazenado.  Após estas operações o valor do registrador acumulador será 10101010."
                ]
            },
            {
                comando:"OR",
                desc:["Efetua a operação 'OU' com valor atual do registrador acumulador (AX) e o valor especificado."],
                exemplos:[  
                    "OR 100 - Efetua o operador OR com o valor atual de AX e 100.", 
                    "OR @5 - Efetua o operador OR com o valor atual de AX e o valor do endereço 5.",
                    "OR BX - Efetua o operador OR com o valor atual de AX e o valor do registrador BX."]
            },
            {
                comando:"STORE",
                desc:["Armazena o valor definido no registrador acumulador (AX) no campo especificado."],
                exemplos:[
                    "STORE BX - Armazena o valor do registrador acumulador no registrador BX.",
                    "STORE @CX - Armazena o valor do registrador acumulador no endereço contido no registrador CX.",
                    "STORE @5 - Armazena o valor do registrador acumulador no endereço especificado."]
            },
            {
                comando:"SUB",
                desc:["Subtrai o valor do registrador acumulador (AX) pelo valor especificado."],
                exemplos:[
                    "SUB 100 - Subtrai 100 do valor do registrador acumulador.",
                    "SUB @5 - Subtrai o valor do endereço 5 do valor do registrador acumulador.",
                    "SUB BX - Subtrai o valor do registrador BX do valor do registrador acumulador."]
            }
    
        ];
        
    }
}