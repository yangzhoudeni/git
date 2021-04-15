import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHide]',
})
export class HideDirective {
  constructor(e: ElementRef) {
    e.nativeElement.style.display = 'none';
    console.log(e);
  }
}
