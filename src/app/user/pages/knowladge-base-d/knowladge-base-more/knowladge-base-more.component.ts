import { Component } from '@angular/core';
import { KnowladgeService } from '../../../../core/services/knowladge.service';
import { ActivatedRoute } from '@angular/router';
import { Knowladgebase } from '../../../../core/interfaces/knowladgebase';

@Component({
  selector: 'app-knowladge-base-more',
  imports: [],
  templateUrl: './knowladge-base-more.component.html',
  styleUrl: './knowladge-base-more.component.css'
})
export class KnowladgeBaseMoreComponent {
  id: number;
  knowladgeBase: Knowladgebase | null = null
  constructor(private knowladgebaseService: KnowladgeService, private activatedRoute: ActivatedRoute){
    this.id = this.activatedRoute.snapshot.params['knowladgeBaseId'];
    knowladgebaseService.getKnowladgebaseById(this.id).then(res => this.knowladgeBase = (res));
  }
}
