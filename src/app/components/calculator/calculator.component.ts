import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  numItems = [10, 20, 30, 40];
  a = 0;
  b = 0;
  sum = 0;
  constructor() { }

  ngOnInit(): void {
    console.log(this.numItems);
  }

  add() {
    this.sum = this.a+this.b;
  }

}
