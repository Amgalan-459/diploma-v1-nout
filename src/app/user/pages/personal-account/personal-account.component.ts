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
      icon: '/images/education-cap-svgrepo-com.svg',
      children: [
        {
          label: 'Доступные курсы', link: '/academy/available',
          subChildren: [
            { label: 'купленные курсы', link: '/academy/available' },
          ]
        },
        {
          label: 'Другие курсы к покупке', link: '/academy/other', subChildren: [
            { label: 'все', link: '/academy/js' },
            { label: 'RECOMPOSITION', link: '/academy/angular' },
            { label: 'парсятся типы и заполняются', link: '/academy/angular' }
          ]
        },
        {
          label: 'База знаний', link: '/academy/library', subChildren: [
            { label: 'парсятся типы и заполняются', link: '/academy/angular' }
          ]
        }
      ]
    },
    {
      label: 'Тренировочный план',
      icon: '/images/rehabilitation-training.svg',
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
      icon: '/images/result-svgrepo-com.svg',
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
      icon: '/images/food-351.svg',
      children: [
        { label: 'Рацион для курса набора', link: '/food/1' },
        { label: 'Рацион для RECAMP', link: '/food/2' }
      ]
    },
    {
      label: 'Отчетность - Анкета',
      icon: '/images/report-28.svg',
      children: [
        { label: 'Отчет за день о курсе RECAMP - пройден 25%', link: '/report/1' },
        { label: 'Отчет за день о курсе набора массы - завершен 100%', link: '/report/2' }
      ]
    }
  ];

  activeIndex: number | null = null;
  activeSubIndex: number | null = null;
  editMode = false;
  editUser: any = {};

  constructor(private authService: AuthService, private traineeService: TraineeService) {
    this.user = authService.getUser()
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

    if (this.dropside && this.subdropside) {
      const dsEl = this.dropside.get(this.activeIndex!)?.nativeElement
      const sdsEl = dsEl.children[0].children[index].children[1]

      this.subdropside.forEach((sds, i) => {
        if (i !== index) {
          sds.nativeElement.classList.remove("show")
        }
      });

      if (sdsEl) {
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
