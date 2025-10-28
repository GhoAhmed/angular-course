import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twb',
  imports: [FormsModule],
  templateUrl: './twb.component.html',
  styleUrl: './twb.component.css',
})
export class TwbComponent {
  firstName = 'Walter';
}
