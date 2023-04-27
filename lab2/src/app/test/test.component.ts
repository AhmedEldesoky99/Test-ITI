import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  num1: number = 5;
  num2: number = 10;
  name: string = 'Yahia';
  constructor(public testService: TestService) {}
  ngOnInit(): void {
    this.testService.getValue();
  }

  addition(num1: number, num2: number): number {
    this.num1 = num1;
    this.num2 = num2;
    return num1 + num2;
  }
  subtraction(num1: number, num2: number): number {
    this.num1 = num1;
    this.num2 = num2;
    return num1 - num2;
  }
  multiplication(num1: number, num2: number): number {
    this.num1 = num1;
    this.num2 = num2;
    return num1 * num2;
  }
  division(num1: number, num2: number): number | string {
    this.num1 = num1;
    this.num2 = num2;
    if (num2 == 0) return 'math error';
    return num1 / num2;
  }
}
