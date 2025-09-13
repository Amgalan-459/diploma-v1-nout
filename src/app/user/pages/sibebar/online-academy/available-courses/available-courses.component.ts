import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Course } from '../../../../../core/interfaces/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-available-courses',
  imports: [CommonModule],
  templateUrl: './available-courses.component.html',
  styleUrl: './available-courses.component.css'
})
export class AvailableCoursesComponent {
  selectedType: string = 'all';

  courses: Course[] = [
    {
      id: 1,
      title: 'RECOMPOSITION',
      author: 'Автор: Иванов',
      rating: 4.5,
      progressText: 'Пройдено 100%',
      type: 'fitness',
      image: '/assets/images/course1.jpg',
      isBuyed: true,
      instructions: 'inst',
      isAvaibale: true,
      trainerId: 1,
      userId: 1
    },
    {
      id: 2,
      title: 'Курс - Набор мышечной массы',
      author: 'Автор: Петров',
      rating: 4.8,
      progressText: 'Пройдено 100%',
      type: 'nutrition',
      image: '/assets/images/course2.jpg',
      isBuyed: true,
      instructions: 'inst',
      isAvaibale: true,
      trainerId: 1,
      userId: 1
    },
    {
      id: 3,
      title: 'Кардио тренировки',
      author: 'Автор: Сидоров',
      rating: 4.2,
      progressText: 'Пройдено 10%',
      type: 'fitness',
      image: '/assets/images/course3.jpg',
      isBuyed: true,
      instructions: 'inst',
      isAvaibale: true,
      trainerId: 1,
      userId: 1
    }
  ];
  router = inject(Router);

  get filteredCourses() {
    if (this.selectedType === 'all') {
      return this.courses;
    }
    return this.courses.filter(c => c.type === this.selectedType);
  }

  onFilterChange(event: Event) {
    this.selectedType = (event.target as HTMLSelectElement).value;
  }

  courseClick(course: Course){
    this.router.navigate(['/online-academy/available-courses/aboba'])
  }
}
