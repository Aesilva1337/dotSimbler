import {ElementRef, Directive} from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Directive({
  selector: '[elastic]'
})

export class Elastic implements OnInit {

  constructor(public element:ElementRef){
    this.element = element;
  }

  ngOnInit():void{
    this.element.nativeElement.querySelector("textarea").style.height = "100%";
  }
  
}