import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>counter: {{counter}}</h3>
    <button (click)="incresBy(+1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="incresBy(-1)">-1</button>
  `
})
export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  incresBy( value:number ):void {
    this.counter += value;
  }

  reset():void {
    this.counter = 10;
  }
}
