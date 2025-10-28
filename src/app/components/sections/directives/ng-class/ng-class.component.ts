import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  imports: [NgClass],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css',
})
export class NgClassComponent {
  currentClass = 'red-text';

  toggleClass() {
    this.currentClass =
      this.currentClass === 'red-text' ? 'blue-text' : 'red-text';
  }
}
