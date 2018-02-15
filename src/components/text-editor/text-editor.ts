import { Component } from '@angular/core';

@Component({
  selector: 'text-editor',
  templateUrl: 'text-editor.html'
})
export class TextEditorComponent {
  text: string;
  public op:any;
  constructor() {
    console.log('Hello TextEditorComponent Component');
    this.text = 'Hello World';
  }
}