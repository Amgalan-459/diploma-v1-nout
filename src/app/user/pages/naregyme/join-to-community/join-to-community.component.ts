import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-to-community',
  imports: [CommonModule],
  templateUrl: './join-to-community.component.html',
  styleUrl: './join-to-community.component.css'
})
export class JoinToCommunityComponent {
  highlights = [
    {
      title: 'Образовательные курсы',
      description: 'Получайте структурированные знания и инструменты для трансформации.'
    },
    {
      title: 'Членство в клубе',
      description: 'Ежемесячная подписка открывает доступ к базе знаний, планам питания, тренировкам и сообществу.'
    },
    {
      title: 'Поддержка наставников',
      description: 'Тренеры и наставники помогут пройти курс и закрепить результат.'
    },
    {
      title: 'Комьюнити и совместный досуг',
      description: 'Общение с единомышленниками, совместные мероприятия и поддержка на пути к цели.'
    }
  ];

  currentIndex = 0;
  private touchStartX = 0;
  private touchEndX = 0;

  constructor(private router: Router) {}

  goToSlide(index: number) { this.currentIndex = index; }

  nextSlide() { this.currentIndex = (this.currentIndex + 1) % this.highlights.length; }

  prevSlide() { this.currentIndex = (this.currentIndex - 1 + this.highlights.length) % this.highlights.length; }

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

  join() {
    this.router.navigate(['/auth/login'])
  }
}
