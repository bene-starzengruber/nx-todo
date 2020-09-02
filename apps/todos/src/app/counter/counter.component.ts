import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

export interface CountValidation {
  max: number;
  color: string;
}


@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  @Input() title = 'Counter';
  @Input() count = 0;
  @Input() validation: CountValidation

  @Output() add = new EventEmitter<void>();

  currentColor = 'black';

  ngOnChanges({ count, validation }: SimpleChanges) {

    if (count || validation) {
      this.updateColor();
    }

  }

  updateColor() {
    if (this.count > this.validation?.max) {
      this.currentColor = this.validation?.color || 'green';
    }
  }

}