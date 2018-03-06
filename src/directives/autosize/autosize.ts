import {ElementRef, HostListener, Directive, OnInit} from '@angular/core';

@Directive({
  selector: '[autosize]'
})

export class AutosizeDirective implements OnInit {
  @HostListener('input', ['$event.target'])
  onInput(textArea:HTMLTextAreaElement):void {
    this.adjust();
  }

  constructor(public element:ElementRef) {
  }

  ngOnInit():void {
    setTimeout(() => this.adjust(), 0);
  }

  adjust():void {
    this.element.nativeElement.querySelector("textarea").style.height = "100%";
    // let textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
    // textArea.style.overflow = 'hidden';
    // textArea.style.height = 'auto';
    // textArea.style.height = textArea.scrollHeight + "px";
  }
}
