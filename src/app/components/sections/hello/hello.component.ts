import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { OutputComponent } from '../output/output.component';
import { NgcComponent } from '../templates/ngc/ngc.component';

@Component({
  selector: 'app-hello',
  imports: [InputComponent, OutputComponent, NgcComponent],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent {
  // expl for output & input
  parentCount = 5;

  updateCount(newCount: number) {
    this.parentCount = newCount;
  }
}
