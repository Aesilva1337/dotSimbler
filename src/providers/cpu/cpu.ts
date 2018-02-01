import { RegistradorEstadoProvider } from './../registrador-estado/registrador-estado';
import { ValueInterface } from './value';
import { CommandsProvider } from './commands';
import { Injectable } from '@angular/core';
import { MemoriaProvider } from '../memoria/memoria';

@Injectable()
export class CpuProvider {

  constructor(private commands: CommandsProvider,
    private memoria: MemoriaProvider,
    private regEstPro: RegistradorEstadoProvider
  ) {

  }

  public execute(operacao, value: ValueInterface) {
    this.regEstPro.verify(
      this.commands.get(operacao)(value.getValue())
    );
  }

}
