import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from "../../../../core/components/footer/footer.component";
import { Knowladgebase } from '../../../../core/interfaces/knowladgebase';
import { KnowladgeService } from '../../../../core/services/knowladge.service';
import { AuthService } from '../../../../core/services/auth.service';


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

  topics: Set<string> = new Set();
  authors: Set<string> = new Set();
  types: Set<string> = new Set();

  knowladgeItems: Knowladgebase[] | null = null;
  favs: boolean[] | null = null;

  isLoggedIn: boolean = false;

  constructor(private knowlodagebaseService: KnowladgeService, private authService: AuthService) {
    this.isLoggedIn = authService.isLoggedIn()
    knowlodagebaseService.getAllKnowladgebases().then(res => {
      if (!res){
        alert("ошибка заполнения")
      }
      this.knowladgeItems = res;
      this.knowladgeItems.forEach(i => {
        this.topics.add(i.topic)
        this.authors.add(i.author)
        this.types.add(i.type)
      })
    })
  }

  get filteredItems() {
    return this.knowladgeItems?.filter(item =>
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

  toggleFavorite(item: any) {
    // Заготовка: переворот состояния
    item.isFavorite = !item.isFavorite;

    // TODO: сохранить в сервис избранного или localStorage
    // this.favoriteService.toggle(item.id);
  }
}
