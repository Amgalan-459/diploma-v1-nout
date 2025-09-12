import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TraineeData } from '../../../core/interfaces/trainee-data';
import { AuthService } from '../../../core/services/auth.service';
import { TraineeService } from '../../../core/services/trainee.service';

interface MenuItem {
  label: string;
  icon: string;
  children?: { label: string, link: string, subChildren?: { label: string, link: string }[] }[];
}

@Component({
  selector: 'app-personal-account',
  imports: [RouterLink, CommonModule],
  templateUrl: './personal-account.component.html',
  styleUrl: './personal-account.component.css'
})
export class PersonalAccountComponent {
  @ViewChildren('dropside') dropside: QueryList<ElementRef> | undefined;
  @ViewChildren('subdropside') subdropside!: QueryList<ElementRef>;
  user: TraineeData | null = null

  menu: MenuItem[] = [
    {
      label: 'Онлайн академия',
      icon: '/sidebar/Gym.svg',
      children: [
        {
          label: 'Доступные курсы', link: '/academy/available',
          subChildren: [
            { label: 'купленные курсы', link: '/online-academy/available-courses' },
          ]
        },
        {
          label: 'Другие курсы к покупке', link: '/academy/other', subChildren: [
            { label: 'все', link: '/online-academy/other-courses' },
            { label: 'RECOMPOSITION', link: '/online-academy/available-courses/RECOMPOSITION' },
            { label: 'парсятся типы и заполняются', link: 'online-academy/available-courses/other' }
          ]
        },
        {
          label: 'База знаний', link: '/academy/library', subChildren: [
            { label: 'парсятся типы и заполняются', link: '/online-academy/knowladge-base' }
          ]
        }
      ]
    },
    {
      label: 'Тренировочный план',
      icon: '/sidebar/Gym Calendar.svg',
      children: [
        {
          label: 'Программы и курсы', link: '/training/programs', subChildren: [
            { label: 'RECOMPOSITION', link: '/academy/js' },
            { label: 'Курс - Набор мышечной массы', link: '/academy/angular' },
            { label: 'Курсы для прохождения', link: '/academy/angular' }
          ]
        },
        {
          label: 'Тип тренировок', link: '/training/types', subChildren: [
            { label: 'Силовые', link: '/academy/js' },
            { label: 'Кардио', link: '/academy/angular' }
          ]
        }
      ]
    },
    {
      label: 'Метрики/Результаты',
      icon: '/sidebar/Measuring Tape.svg',
      children: [
        {
          label: 'База', link: '/results/academy', subChildren: [
            { label: 'Основные данные об атлете', link: '/academy/js' },
            { label: 'Достижения', link: '/academy/angular' },
            { label: 'Текущий этап - цели', link: '/academy/angular' },
            { label: 'Трансформация ДО/ПОСЛЕ', link: '/academy/angular' },
            { label: 'Результативность - метрики', link: '/academy/angular' },
          ]
        },
        {
          label: 'Академия', link: '/results/academy', subChildren: [
            { label: 'завершенные и текущие курсы / цикли / программы с метриками результативности', link: '/academy/js' },
          ]
        },
        {
          label: 'Тренировочный план', link: '/results/academy', subChildren: [
            { label: 'завершенные и текущие курсы / цикли / программы с метриками соблюдения тренировочного плана', link: '/academy/js' },
          ]
        },
        {
          label: 'План питания', link: '/results/academy', subChildren: [
            { label: 'завершенные и текущие курсы / цикли / программы с метриками соблюдения плана питания', link: '/academy/js' },
          ]
        },
        {
          label: 'Отчетность', link: '', subChildren: [
            { label: 'завершенные и текущие курсы / цикли / программы с метриками соблюдения отчетности', link: '' }
          ]
        }
      ]
    },
    {
      label: 'План питания',
      icon: '/sidebar/MP3 Player.svg',
      children: [
        { label: 'Рацион для курса набора', link: '/food/1' },
        { label: 'Рацион для RECAMP', link: '/food/2' }
      ]
    },
    {
      label: 'Отчетность - Анкета',
      icon: '/sidebar/Gym Report.svg',
      children: [
        { label: 'Отчет за день о курсе RECAMP - пройден 25%', link: '/report/1' },
        { label: 'Отчет за день о курсе набора массы - завершен 100%', link: '/report/2' }
      ]
    }
  ];

  courses = [
    {
      title: 'Инструкции пользования сервисом',
      author: 'Анатолий Александров',
      rating: 5.0,
      progressText: 'Пройдено - 100%',
      image: '/assets/course1.png'
    },
    {
      title: 'Силовой цикл - 12 недель',
      author: 'Сергей Рузанщиков',
      rating: 4.5,
      progressText: 'Пройдено - 100%',
      image: '/assets/course2.png'
    },
    {
      title: 'Мобильность и МФР',
      author: 'Ангалат Борголоев',
      rating: 4.5,
      progressText: 'В работе - 35%',
      image: '/assets/course3.png'
    },
    {
      title: 'Функциональный тренинг',
      author: 'Василий Кушнаренко',
      rating: 4.5,
      progressText: 'Пройдено - 0%',
      image: '/assets/course4.png'
    }
  ];


  showCalendar = false;
  currentYear = new Date().getFullYear();
  months = [
    { name: 'Январь', num: '01', days: Array.from({ length: 31 }, (_, i) => i + 1) },
    { name: 'Февраль', num: '02', days: Array.from({ length: 28 }, (_, i) => i + 1) },
    { name: 'Март', num: '03', days: Array.from({ length: 31 }, (_, i) => i + 1) },
    { name: 'Апрель', num: '04', days: Array.from({ length: 30 }, (_, i) => i + 1) },
    { name: 'Май', num: '05', days: Array.from({ length: 31 }, (_, i) => i + 1) },
    { name: 'Июнь', num: '06', days: Array.from({ length: 30 }, (_, i) => i + 1) },
    { name: 'Июль', num: '07', days: Array.from({ length: 31 }, (_, i) => i + 1) },
    { name: 'Август', num: '08', days: Array.from({ length: 31 }, (_, i) => i + 1) },
    { name: 'Сентябрь', num: '09', days: Array.from({ length: 30 }, (_, i) => i + 1) },
    { name: 'Октябрь', num: '10', days: Array.from({ length: 31 }, (_, i) => i + 1) },
    { name: 'Ноябрь', num: '11', days: Array.from({ length: 30 }, (_, i) => i + 1) },
    { name: 'Декабрь', num: '12', days: Array.from({ length: 31 }, (_, i) => i + 1) }
  ];

  activeIndex: number | null = null;
  activeSubIndex: number | null = null;
  editMode = false;
  editUser: any = {};

  constructor(private authService: AuthService, private traineeService: TraineeService) {
    this.user = authService.getUser()
  }

  openCalendar(sub: any) {
    this.showCalendar = !this.showCalendar;
  }

  closeCalendar(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.showCalendar = false;
  }

  onClickDrop(event: Event, index: number) {
    event.stopPropagation();
    const target = event.currentTarget as HTMLElement;

    if (this.dropside) {
      const dsEl = this.dropside.get(index)?.nativeElement

      if (this.activeIndex === index) {
        this.activeIndex = null;
      } else {
        this.activeIndex = index;
        this.subdropside.forEach(sds => {
          sds.nativeElement.classList.remove("show")
        })
      }

      this.dropside.forEach((ds, i) => {
        if (i !== index) {
          ds.nativeElement.classList.remove("show")
        }
      });
      if (dsEl) {
        dsEl.style.paddingTop = `${target.offsetTop}px`;
        dsEl.classList.toggle("show")
      }
    }
  }

  onClickSubDrop(event: Event, index: number) {
    event.stopPropagation();
    const target = event.currentTarget as HTMLElement;
    this.activeSubIndex = this.activeSubIndex === index ? null : index;
    console.log(this.activeSubIndex)

    if (this.dropside && this.subdropside) {
      const dsEl = this.dropside.get(this.activeIndex!)?.nativeElement
      const sdsEl = dsEl.children[0].children[index].children[1]

      this.subdropside.forEach((sds, i) => {
        if (i !== index) {
          sds.nativeElement.classList.remove("show")
        }
      });

      if (sdsEl) {
        console.log(sdsEl, dsEl)
        sdsEl.style.paddingTop = `${target.offsetTop}px`;
        sdsEl.classList.toggle("show")
      }
    }
  }

  closeAllDrops() {
    if (this.dropside) {
      this.dropside.forEach((dropside) => {
        dropside.nativeElement.classList.remove("show");
      });
    }
    if (this.subdropside) {
      this.subdropside.forEach((subds) => {
        subds.nativeElement.classList.remove("show")
      })
    }
  }

  enableEdit() {
    this.editUser = { ...this.user };
    this.editMode = true;
  }

  cancelEdit() {
    this.editMode = false;
    this.editUser = {};
  }

  async saveChanges() {
    await this.traineeService.postTrainee((this.editUser as TraineeData)).then(res => {

    })

    this.user = { ...this.editUser };
    this.editMode = false;
  }

  onInputChange(field: string, event: Event) {
    const target = event.target as HTMLInputElement;
    this.editUser[field] = target.value;
  }

  onSelectChange(field: string, event: Event) {
    const target = event.target as HTMLSelectElement;
    this.editUser[field] = +target.value;
  }
}
