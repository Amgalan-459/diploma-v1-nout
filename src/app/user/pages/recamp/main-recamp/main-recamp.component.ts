import { Component } from '@angular/core';
import { AboutCommunityComponent } from "../about-community/about-community.component";
import { RecompozitionComponent } from "../recompozition/recompozition.component";
import { RoadMapComponent } from "../road-map/road-map.component";
import { FotoesVideosFromEventsComponent } from "../fotoes-videos-from-events/fotoes-videos-from-events.component";
import { JoinToCommunityRecampComponent } from "../join-to-community-recamp/join-to-community-recamp.component";

@Component({
  selector: 'app-main-recamp',
  imports: [AboutCommunityComponent, RecompozitionComponent, RoadMapComponent, FotoesVideosFromEventsComponent, JoinToCommunityRecampComponent],
  templateUrl: './main-recamp.component.html',
  styleUrl: './main-recamp.component.css'
})
export class MainRecampComponent {

}
