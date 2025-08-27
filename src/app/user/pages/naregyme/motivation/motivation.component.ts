import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-motivation',
  imports: [CommonModule],
  templateUrl: './motivation.component.html',
  styleUrl: './motivation.component.css'
})
export class MotivationComponent {
  offers = [
    { title: 'Доступ к образовательному курсу', description: 'Пройдите курс и получите базовые знания и инструменты для вашей трансформации.' },
    { title: 'Членство в клубе', description: 'Ежемесячная подписка дает доступ к базе знаний, тренировкам, планам питания и общению с единомышленниками.' },
    { title: 'Реальные результаты', description: 'Мы фокусируемся на практических результатах — ваши успехи будут видны уже через макро- и мезоциклы.' },
    { title: 'Поддержка наставников', description: 'Наши тренеры и наставники сопровождают вас на всех этапах курса и клуба.' }
  ];

  currentIndex = 0;
  private touchStartX = 0;
  private touchEndX = 0;

  goToSlide(index: number) { this.currentIndex = index; }

  nextSlide() { this.currentIndex = (this.currentIndex + 1) % this.offers.length; }

  prevSlide() { this.currentIndex = (this.currentIndex - 1 + this.offers.length) % this.offers.length; }

  onTouchStart(event: TouchEvent) { this.touchStartX = event.changedTouches[0].screenX; }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe() {
    const swipeDistance = this.touchEndX - this.touchStartX;
    const minSwipeDistance = 50;
    if (swipeDistance > minSwipeDistance) { this.prevSlide(); }
    else if (swipeDistance < -minSwipeDistance) { this.nextSlide(); }
  }
}
