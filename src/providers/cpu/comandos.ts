import { UnidadeLogicaAritmetica } from './unidade-aritmetica/unidade-aritmetica';
import { LineOperation } from './lineOperation';
import { Registrador } from './registrador/registrador';
import { Injectable } from '@angular/core';

@Injectable()
export class Comandos {

  commands=new Set<string>(); 
  
  init(){
    this.commands.add("ADD");
    this.commands.add("SUB");
    this.commands.add("MUL");
    this.commands.add("DIV");
    this.commands.add("INC");
    this.commands.add("DEC");
    this.commands.add("OR");
    this.commands.add("AND");
    this.commands.add("NOT"); 
    this.commands.add("STORE");
    this.commands.add("CMP"); 
    this.commands.add("LOAD");
    this.commands.add("JS"); 
    this.commands.add("JNS");
    this.commands.add("JO");
    this.commands.add("JNO");
    this.commands.add("JZ"); 
    this.commands.add("JNZ"); 
    this.commands.add("DB");
    this.commands.add("NOP");
    this.commands.add("HLT");
  }
 
  constructor(private reg: Registrador,
    private ula: UnidadeLogicaAritmetica) {
      this.init();
  }

  get(lo: LineOperation) {
    let func = null;
    switch (lo.operation.command) {
      case "ADD": func = () => this.ula.add('AX', +lo.operation.value); break;
      case "SUB": func = () => this.ula.sub('AX', +lo.operation.value); break;
      case "MUL": func = () => this.ula.mul('AX', +lo.operation.value); break;
      case "DIV": func = () => this.ula.div('AX', +lo.operation.value); break;
      case "INC": func = () => this.ula.inc('AX', +lo.operation.value); break;
      case "DEC": func = () => this.ula.dec('AX', +lo.operation.value); break;
      case "OR": func = () => this.ula.or('AX', +lo.operation.value); break;
      case "AND": func = () => this.ula.and('AX', +lo.operation.value); break;
      case "NOT": func = () => this.ula.not('AX'); break;
      case "STORE": func = () => this.ula.store(lo.operation.value); break;
      case "CMP": func = () => this.ula.cmp('AX', +lo.operation.value); break;
      case "LOAD": func = () => this.ula.load(lo.operation.value); break;
      case "JS": func = () => { if (this.reg.S) this.reg.SET("PC", +lo.operation.value) }; break;
      case "JNS": func = () => { if (!this.reg.S) this.reg.SET("PC", +lo.operation.value) }; break;
      case "JO": func = () => { if (this.reg.O) this.reg.SET("PC", +lo.operation.value) }; break;
      case "JNO": func = () => { if (!this.reg.O) this.reg.SET("PC", +lo.operation.value) }; break;
      case "JZ": func = () => { if (this.reg.Z) this.reg.SET("PC", +lo.operation.value) }; break;
      case "JNZ": func = () => { if (!this.reg.Z) this.reg.SET("PC", +lo.operation.value) }; break;
      case "DB": func = () => lo.value = +lo.operation.value; break;
      case "NOP": func = () => 1; break;
      case "HLT": func = () => this.reg.PC = -1; break;
    }

    return func;
  }

  contains(val:string) {
    return this.commands.has(val.trim());
  }
}