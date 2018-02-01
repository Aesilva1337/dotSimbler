import { Injectable } from '@angular/core';

@Injectable()
export class RegistradorEstadoProvider {

  public OVERFLOW = false;
  public SINAL = false;
  public ZERO = false;

  constructor() {
  }

  public verify(value){
    this.ZERO = value === 0;
    this.OVERFLOW = (value < -127 || value > 127);
    this.SINAL = value < 0;
  }
}
