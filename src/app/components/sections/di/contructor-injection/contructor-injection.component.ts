import { Component } from '@angular/core';
import { LoggerService } from '../../../../core/services/logger.service';

@Component({
  selector: 'app-contructor-injection',
  imports: [],
  templateUrl: './contructor-injection.component.html',
  styleUrl: './contructor-injection.component.css',
})
export class ContructorInjectionComponent {
  constructor(private logger: LoggerService) {}

  sendMessage() {
    this.logger.log('User clicked the button!');
  }

  sendWarning() {
    this.logger.warn('This is a warning!');
  }

  sendError() {
    this.logger.error('Something went wrong!');
  }
}
