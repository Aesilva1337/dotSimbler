import { CommandsProvider } from './../cpu/commands';
import { Memory } from './../cpu/memory';
import { Registrador } from './../cpu/registrador';
import { RegistradorGeralProvider } from './../registrador-geral/registrador-geral';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FunctionCall } from '@angular/compiler';

@Injectable()
export class UnidadeLogicaAritmeticaProvider {

  constructor(public registradorGeralProvider: RegistradorGeralProvider,
  public commands:CommandsProvider ) {     
  }

  execute(typeValue,operacao){
    if(typeof Number !== typeValue){
      this.commands.map.get(operacao)(typeValue.value);
    }else{
      this.commands.map.get(operacao)(typeValue);
    }
  }

  
}
