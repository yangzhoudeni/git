import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc07',
  templateUrl: './myc07.component.html',
  styleUrls: ['./myc07.component.css'],
})
export class Myc07Component implements OnInit {
  num = 5;
  constructor() {
    console.log('constructor:构造方法，对象实例化出发');
  }

  ngOnInit(): void {
    //相当于vue的created
    console.log('ngOnInit:组件开始创建');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit:数据初始化完毕');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit:UI界面初始化完毕');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked:数据发生更新');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked:UI界面发生更新');
    if (this.num == 10) {
      alert('10');
    }
  }
  ngOnDestory(): void {
    console.log('ngOnDestory:组件将要销毁');
  }
}
