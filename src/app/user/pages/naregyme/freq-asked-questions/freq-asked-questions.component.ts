import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-freq-asked-questions',
  imports: [CommonModule],
  templateUrl: './freq-asked-questions.component.html',
  styleUrl: './freq-asked-questions.component.css'
})
export class FreqAskedQuestionsComponent {
  faqs = [
    {
      question: 'Как попасть в клуб?',
      answer: 'Зарегестроиуйся и получи доступ, а после оконачания можешь быть наставником новых участников.'
    },
    {
      question: 'Можно ли оплатить курс частями?',
      answer: 'Да, можно оплатить весь макроцикл с рассрочкой по мезоциклам.'
    },
    {
      question: 'Что входит в подписку клуба?',
      answer: 'Подписка дает доступ к базе знаний, дополнительным курсам, тренировочным планам, планам питания и коммуникации с участниками.'
    },
    {
      question: 'Можно ли пройти отдельные курсы без членства?',
      answer: 'Да, отдельные курсы доступны с доступом в личный кабинет в виде демо версии.'
    }
  ];

  currentIndex = 0;
  private touchStartX = 0;
  private touchEndX = 0;

  goToSlide(index: number) { this.currentIndex = index; }

  nextSlide() { this.currentIndex = (this.currentIndex + 1) % this.faqs.length; }

  prevSlide() { this.currentIndex = (this.currentIndex - 1 + this.faqs.length) % this.faqs.length; }

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
