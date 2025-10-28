import { Component } from '@angular/core';

@Component({
  selector: 'app-listener',
  imports: [],
  templateUrl: './listener.component.html',
  styleUrl: './listener.component.css',
})
export class ListenerComponent {
  updateField(): void {
    console.log('Field is updated!');
  }
}
