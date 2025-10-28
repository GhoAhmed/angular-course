import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  imports: [NgStyle],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css',
})
export class NgStyleComponent {
  textColor = 'red';
  isBold = false;
  fontSize = 16;

  toggleBold() {
    this.isBold = !this.isBold;
  }
  changeColor() {
    this.textColor = this.textColor === 'red' ? 'blue' : 'red';
  }
  increaseFont() {
    this.fontSize += 2;
  }
}
