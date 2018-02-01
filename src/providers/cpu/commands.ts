import { RegistradorGeralProvider } from './../registrador-geral/registrador-geral';
import { Registrador } from './registrador';
import { Injectable } from '@angular/core';

@Injectable()
export class CommandsProvider {

  public map:Map<string , (x:number)=>number>;

  constructor(reg:RegistradorGeralProvider) { 
    this.map = new Map<string , (x:number)=>number>();

    this.map.set("ADD",(x)=> reg.AX.add(+x) );
    this.map.set("SUB",(x)=> reg.AX.sub(+x) );
    this.map.set("MUL",(x)=> reg.AX.mul(+x) );
    this.map.set("DIV",(x)=> reg.AX.div(+x) );
    this.map.set("INC",(x)=> reg.AX.inc(+x) );
    this.map.set("DEC",(x)=> reg.AX.dec(+x) );
    this.map.set("OR", (x)=> reg.AX.or(+x) );
    this.map.set("AND",(x)=> reg.AX.and(+x) );
    this.map.set("NOT",(x)=> reg.AX.not());
    this.map.set("STORE",(x)=> reg[x].store(reg.AX.getValue()) );
    this.map.set("CMP",(x)=> reg.AX.cmp(+x) );
    this.map.set("LOAD",(x)=> reg.AX.load(+x) );
    this.map.set("JS",(x)=> 1 );
    this.map.set("JNS",(x)=> 1 );
    this.map.set("JO",(x)=> 1 );
    this.map.set("JNO",(x)=> 1 );
    this.map.set("DB",(x)=> 1 ); 
    this.map.set("NOP",(x)=> 1 );   
    this.map.set("HLT",(x)=> 1 );
  }

  get(index){
    return this.map.get(index);
  }
}