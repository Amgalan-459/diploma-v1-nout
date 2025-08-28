import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-body-fat-percentage',
  imports: [CommonModule],
  templateUrl: './body-fat-percentage.component.html',
  styleUrl: './body-fat-percentage.component.css'
})
export class BodyFatPercentageComponent {
  calculators = [
    { result: null as string | null },
    { result: null as string | null },
    { result: null as string | null }
  ];

  calculateBMI(height: string, weight: string, index: number) {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w || h <= 0 || w <= 0) {
      this.calculators[index].result = 'Введите корректные значения';
      return;
    }

    const bmi = w / Math.pow(h / 100, 2);
    let category = '';

    if (bmi < 18.5) category = 'Недостаточный вес';
    else if (bmi < 25) category = 'Норма';
    else if (bmi < 30) category = 'Избыточный вес';
    else category = 'Ожирение';

    this.calculators[index].result = `Ваш ИМТ: ${bmi.toFixed(1)} (${category})`;
  }
}
