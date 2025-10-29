import { Component, inject } from '@angular/core';
import { LoggerContextService } from '../../../../core/services/logger-context.service';

@Component({
  selector: 'app-context-injection',
  imports: [],
  templateUrl: './context-injection.component.html',
  styleUrl: './context-injection.component.css',
})
export class ContextInjectionComponent {
  private logger = inject(LoggerContextService);

  sayHello() {
    this.logger.log('Hello from Context Injection using inject()!');
  }
}
