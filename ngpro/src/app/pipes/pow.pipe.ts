import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pow',
})
export class PowPipe implements PipeTransform {
  transform(value: number, exp: number) {
    return Math.pow(value, exp);
  }
}
