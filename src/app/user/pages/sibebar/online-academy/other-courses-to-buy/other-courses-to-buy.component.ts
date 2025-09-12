import { Component } from '@angular/core';
import { Course } from '../../../../../core/interfaces/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-other-courses-to-buy',
  imports: [CommonModule],
  templateUrl: './other-courses-to-buy.component.html',
  styleUrl: './other-courses-to-buy.component.css'
})
export class OtherCoursesToBuyComponent {
  selectedType: string = 'all';

  courses: Course[] = [
    {
      id: 4,
      title: 'RECOMPOSITION',
      author: 'Автор: Иванов',
      rating: 4.5,
      progressText: 'Пройдено 100%',
      type: 'fitness',
      image: '/assets/images/course1.jpg',
      isBuyed: false,
      ModuleIds: []
    },
    {
      id: 5,
      title: 'Курс - Набор мышечной массы',
      author: 'Автор: Петров',
      rating: 4.8,
      progressText: 'Пройдено 100%',
      type: 'nutrition',
      image: '/assets/images/course2.jpg',
      isBuyed: false,
      ModuleIds: []
    },
    {
      id: 6,
      title: 'Кардио тренировки',
      author: 'Автор: Сидоров',
      rating: 4.2,
      progressText: 'Пройдено 10%',
      type: 'fitness',
      image: '/assets/images/course3.jpg',
      isBuyed: false,
      ModuleIds: []
    }
  ];

  get filteredCourses() {
    if (this.selectedType === 'all') {
      return this.courses;
    }
    return this.courses.filter(c => c.type === this.selectedType);
  }

  onFilterChange(event: Event) {
    this.selectedType = (event.target as HTMLSelectElement).value;
  }
}
