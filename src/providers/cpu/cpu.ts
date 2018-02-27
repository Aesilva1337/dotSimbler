import { LineOperation } from './lineOperation';
import { UnidadeControleProvider } from './../unidade-controle/unidade-controle';
import { RegistradorEstadoProvider } from './../registrador-estado/registrador-estado';
import { ValueInterface } from './value';
import { CommandsProvider } from './commands';
import { Injectable } from '@angular/core';
import { MemoriaProvider } from '../memoria/memoria';
import { RegistradorGeralProvider } from '../registrador-geral/registrador-geral';

@Injectable()
export class CpuProvider {

  constructor(
      private commands: CommandsProvider,
      private memory: MemoriaProvider,
      private regEst: RegistradorEstadoProvider,
      private reg:RegistradorGeralProvider,
      private UC : UnidadeControleProvider
    ) {
  }

  mapMemory(values:LineOperation[]){
    this.memory.clean();
    values.forEach(element => {
      this.memory.setMemory(element.line,element.operation)
    });
    this.UC.mapKeys();
  }
  public next() {
      this.UC.nextOperation();
  }
  public prev(){
    this.UC.prevOperation();
  }



}
