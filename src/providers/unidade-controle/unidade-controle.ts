import { RegistradorEstadoProvider } from './../registrador-estado/registrador-estado';
import { StateOperation } from './../cpu/stateOperation';
import { LineOperation } from './../cpu/lineOperation';
import { RegistradorGeralProvider } from './../registrador-geral/registrador-geral';
import { Memory } from './../cpu/memory';
import { CommandsProvider } from './../cpu/commands';
import { MemoriaProvider } from './../memoria/memoria';
import { Injectable } from '@angular/core';


@Injectable()
export class UnidadeControleProvider {
  lastSnapShotValues;
  line = 0;
  lines:Array<number>;
  private state:StateOperation;

  constructor(private memory:MemoriaProvider,
  private commands:CommandsProvider,
  private regG:RegistradorGeralProvider,
  private regE:RegistradorEstadoProvider) {

    this.state = new StateOperation(regE,regG);
  }
  mapKeys(){
    this.lines = this.memory.getKeys();
  }

  prevOperation(){
    this.line = this.state.pop();
  }

  nextOperation(){  
    console.log(this.line);
    this.memory.setLine(this.lines[this.line]);
    this.executeOperation();

    this.state.push(this.line);
    if(this.lines[this.line] == this.memory.getLine()){
      this.line++;
    } else{
      this.line = this.lines.indexOf(this.memory.getLine());
    }
  }

  private executeOperation(){
    let operation = this.memory.lineOperation();
    let exec = this.commands.get(operation.command);
    console.log(operation.command,operation.value);
    let ret = exec(operation.value)
    this.regE.verify(ret);
  }

}
