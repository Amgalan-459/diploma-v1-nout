import { Component } from '@angular/core';
import { PartipantsResultsComponent } from "../partipants-results/partipants-results.component";
import { HonorBoardComponent } from "../honor-board/honor-board.component";

@Component({
  selector: 'app-main-we-naregyme',
  imports: [PartipantsResultsComponent, HonorBoardComponent],
  templateUrl: './main-we-naregyme.component.html',
  styleUrl: './main-we-naregyme.component.css'
})
export class MainWeNaregymeComponent {

}
