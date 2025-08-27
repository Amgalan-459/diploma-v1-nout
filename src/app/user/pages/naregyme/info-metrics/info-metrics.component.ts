import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-info-metrics',
  imports: [CommonModule],
  templateUrl: './info-metrics.component.html',
  styleUrl: './info-metrics.component.css'
})
export class InfoMetricsComponent {
  metrics = [
    { value: '12 480', unit: 'кг', label: 'жира сожжено' },
    { value: '1 850 000', unit: 'кг', label: 'веса поднято' },
    { value: '92 345 678', unit: 'шагов', label: 'пройдено' },
    { value: '9 876 543', unit: 'ккал', label: 'сожжено' }
  ];
  currentIndex = 0;

  private touchStartX = 0;
  private touchEndX = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.metrics.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.metrics.length) % this.metrics.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe() {
    const swipeDistance = this.touchEndX - this.touchStartX;
    const minSwipeDistance = 50; // минимальное расстояние для свайпа

    if (swipeDistance > minSwipeDistance) {
      // свайп вправо
      this.prevSlide();
    } else if (swipeDistance < -minSwipeDistance) {
      // свайп влево
      this.nextSlide();
    }
  }
}
