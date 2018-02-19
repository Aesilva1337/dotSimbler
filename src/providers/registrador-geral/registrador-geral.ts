import { Registrador } from './../cpu/registrador';
import { Injectable } from '@angular/core';


@Injectable()
export class RegistradorGeralProvider {

  public AX = new Registrador();
  public BX = new Registrador();
  public CX = new Registrador();
  public DX = new Registrador();

  constructor() {
    
  }
}