import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerContextService {
  log(message: string) {
    console.log('LOG:', message);
  }
}
