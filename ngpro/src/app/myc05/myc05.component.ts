import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc05',
  templateUrl: './myc05.component.html',
  styleUrls: ['./myc05.component.css'],
})
export class Myc05Component implements OnInit {
  arr = ['吃饭', '睡觉', '打架'];
  src = '';

  delete(index) {
    this.arr.splice(index, 1);
  }
  add() {
    if (this.src != '') {
      this.arr.push(this.src);
    }

    // this.src = '';
  }
  constructor() {}

  ngOnInit(): void {}
}
