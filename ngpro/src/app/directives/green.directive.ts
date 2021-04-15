import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGreen]',
})
export class GreenDirective {
  //<li appGreen>然然</li>
  constructor(e: ElementRef) {
    console.log(e);
    e.nativeElement.style.color = 'green';
  }
}
