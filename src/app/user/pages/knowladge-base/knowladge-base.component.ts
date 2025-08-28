import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../../../core/components/footer/footer.component";

interface KnowledgeItem {
  id: number;
  title: string;
  author: string;
  topic: string;
  type: 'text' | 'image' | 'video';
  description: string;
}

@Component({
  selector: 'app-knowladge-base',
  imports: [RouterLink, CommonModule, FooterComponent],
  templateUrl: './knowladge-base.component.html',
  styleUrl: './knowladge-base.component.css'
})
export class KnowladgeBaseComponent {
  searchTerm: string = '';
  filterTopic: string = '';
  filterAuthor: string = '';
  filterType: string = '';

  topics: string[] = ['Силовые упражнения', 'Кардио', 'Растяжка', 'Питание', 'Мотивация'];
  authors: string[] = ['Виталий Бужан', 'Мария Иванова', 'Игорь Смирнов'];
  types: string[] = ['text', 'image', 'video'];

  knowledgeItems: KnowledgeItem[] = [
    { id: 1, title: 'Приседания для начинающих', author: 'Виталий Бужан', topic: 'Силовые упражнения', type: 'text', description: 'Полное описание техники приседаний...' },
    { id: 2, title: 'Кардио для похудения', author: 'Мария Иванова', topic: 'Кардио', type: 'video', description: 'Видео с тренировкой кардио...' },
    { id: 3, title: 'Растяжка после тренировки', author: 'Игорь Смирнов', topic: 'Растяжка', type: 'image', description: 'Пошаговые фото упражнений на растяжку...' },
    { id: 3, title: 'Растяжка после тренировки', author: 'Игорь Смирнов', topic: 'Растяжка', type: 'image', description: 'Пошаговые фото упражнений на растяжку...' },
  ];

  get filteredItems() {
    return this.knowledgeItems.filter(item =>
      (this.searchTerm === '' || item.title.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
      (this.filterTopic === '' || item.topic === this.filterTopic) &&
      (this.filterAuthor === '' || item.author === this.filterAuthor) &&
      (this.filterType === '' || item.type === this.filterType)
    );
  }

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
  }

  onTopicChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.filterTopic = select.value;
  }

  onAuthorChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.filterAuthor = select.value;
  }

  onTypeChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.filterType = select.value;
  }

}
