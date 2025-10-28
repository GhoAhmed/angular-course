import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngt',
  imports: [CommonModule],
  templateUrl: './ngt.component.html',
  styleUrl: './ngt.component.css',
})
export class NgtComponent {
  isLoggedIn = false;

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
