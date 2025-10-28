import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css',
})
export class OutputComponent {
  @Input() count = 0;
  @Output() countChange = new EventEmitter<number>();

  increase() {
    this.count++;
    this.countChange.emit(this.count);
  }

  decrease() {
    this.count--;
    this.countChange.emit(this.count);
  }
}
