import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngct',
  imports: [CommonModule],
  templateUrl: './ngct.component.html',
  styleUrl: './ngct.component.css',
})
export class NgctComponent {
  showDetails = true;
}
