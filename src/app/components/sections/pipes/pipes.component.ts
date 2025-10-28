import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [CurrencyPipe, DatePipe, TitleCasePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  amount = 123.45;
  company = 'iset corporation';
  purchasedOn = '2024-07-08';
}
