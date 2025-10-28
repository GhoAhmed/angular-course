import { CommonModule, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  imports: [CommonModule],
  templateUrl: './ng-switch.component.html',
  styleUrl: './ng-switch.component.css',
})
export class NgSwitchComponent {
  selectedRole = 'admin';
}
