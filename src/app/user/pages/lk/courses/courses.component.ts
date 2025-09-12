import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-courses',
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courseTitle = 'Полный видеогайд по тревоге.';
  student = {
    name: 'Tolya Alexandrov'
  };

  modules = [
    {
      title: 'Начните с этого',
      expanded: true,
      lessons: [
        { id: 1, title: 'Соглашение о конфиденциальности', completed: true, videoUrl: '', content: 'url на политики конфиденциальности' },
        { id: 2, title: 'Отказ от ответсвенности', completed: false, videoUrl: '', content: 'Мы не берем на себя никакую отвественность' },
      ]
    },
    {
      title: 'Модуль №1: Природа тревоги',
      expanded: true,
      lessons: [
        { id: 3, title: 'Урок №1: Что такое тревога?', completed: true, videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4', content: 'Описание урока 1' },
        { id: 4, title: 'Урок №2: Плохая и хорошая тревога', completed: true, videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4', content: 'Описание урока 2' },
        { id: 5, title: 'Урок №3: Как человек становится тревожным?', completed: false, videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4', content: 'Описание урока 3' },
        { id: 6, title: 'Урок №4: Бывают ли не тревожные люди?', completed: false, videoUrl: '', content: 'Описание урока 4' }
      ],
      test: { id: 't1', title: 'Тест модуля 1', completed: false }
    },
    {
      title: 'Модуль №2: Теоретические модели тревоги',
      expanded: false,
      lessons: [
        { id: 7, title: 'Урок №1: Основные теоретические модели тревоги', completed: false, videoUrl: '', content: 'Описание урока 5' },
        { id: 8, title: 'Урок №2: Биопсихосоциальная модель тревоги', completed: false, videoUrl: '', content: 'Описание урока 6' }
      ],
      test: { id: 't2', title: 'Тест модуля 2', completed: false }
    }
  ];

  activeLesson: any = null
  activeLessonId: number | null = null

  safeVideoUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {
    this.selectLesson(this.modules[0].lessons[0])
  }

  toggleModule(module: any) {
    module.expanded = !module.expanded;
  }

  selectLesson(lesson: any) {
    if (!this.modules[0].lessons[0].completed || !this.modules[0].lessons[1].completed) {
      if (!(lesson.id === this.modules[0].lessons[0].id || lesson.id === this.modules[0].lessons[1].id)) {
        return
      }
    }
    this.activeLesson = lesson;
    this.activeLessonId = lesson.id;
    lesson.completed = true;

    // делаем URL безопасным для Angular
    if (lesson.videoUrl) {
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(lesson.videoUrl);
    } else {
      this.safeVideoUrl = null;
    }
  }

  openTest(test: any) {
    alert('Открываем тест: ' + test.title);
    test.completed = true;
  }

  moduleProgress(module: any) {
    const completed = module.lessons.filter((l: any) => l.completed).length;
    return `${completed}/${module.lessons.length}`;
  }

  moduleProgressPercent(module: any): number {
    const completed = module.lessons.filter((l: any) => l.completed).length;
    return (completed / module.lessons.length) * 100;
  }
}
