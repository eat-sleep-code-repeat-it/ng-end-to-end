import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  a = 0;
  b = 0;
  sum = 0;
  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.sum = this.a+this.b;
  }

}
