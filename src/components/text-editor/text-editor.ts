import { CpuProvider } from './../../providers/cpu/cpu';
import { ConversorProvider } from './../../providers/conversor/conversor';
import { CommandsProvider } from './../../providers/cpu/commands';
import { RegistradorGeralProvider } from './../../providers/registrador-geral/registrador-geral';
import { Analyzer } from './../../providers/analyzer/analyzer';
import { Component } from '@angular/core';

@Component({
  selector: 'text-editor',
  templateUrl: 'text-editor.html'
})
export class TextEditorComponent {
  
  text: string;
  textInstruction: string = "";
  public op:any;
  constructor(private cpu: CpuProvider, reg: RegistradorGeralProvider,
  private commands:CommandsProvider, private cv:ConversorProvider,
  private anl: Analyzer) {

  }
}