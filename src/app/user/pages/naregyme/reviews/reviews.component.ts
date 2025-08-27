import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  reviews = [
    { 
      name: 'Алексей П.',
      role: 'участник клуба',
      text: 'Прошел курс, получил реальные результаты и теперь продолжаю развиваться в клубе. Очень ценно общение с единомышленниками и доступ к базе знаний!'
    },
    { 
      name: 'Марина К.', 
      role: 'участница образовательного курса', 
      text: 'Курс оказался глубоким и структурированным. После прохождения я смогла войти в клуб и работать с материалами на постоянной основе.' 
    },
    { 
      name: 'Виталий Б.', 
      role: 'тренер и наставник', 
      text: 'Я рад видеть, как участники применяют знания из курсов в реальной жизни. Клуб мотивирует делать результат и оставаться в команде сильных людей.' 
    }
  ];

  currentIndex = 0;
  private touchStartX = 0;
  private touchEndX = 0;

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
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
    const minSwipeDistance = 50;

    if (swipeDistance > minSwipeDistance) {
      this.prevSlide();
    } else if (swipeDistance < -minSwipeDistance) {
      this.nextSlide();
    }
  }
}
