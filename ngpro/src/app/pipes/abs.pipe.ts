import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abs',
})
export class AbsPipe implements PipeTransform {
  //{{9|abs}}这是个语法糖写法，完整格式如下：
  //new AbsPipe().transform(9)
  transform(value: unknown) {
    return value > 0 ? value : -value;
  }
}
