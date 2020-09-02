import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs/operators';
import { CountValidation } from '../counter/counter.component';

@Component({
  selector: 'myorg-counter-test',
  templateUrl: './counter-test.component.html',
  styleUrls: ['./counter-test.component.css']
})
export class CounterTestComponent {

  counterShown = false;

  constructor() {
  }

  toggleComponent(show: boolean) {
    this.counterShown = show;
  }

}


