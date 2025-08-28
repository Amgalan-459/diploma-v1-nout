import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AboutProjectComponent } from "../naregyme/about-project/about-project.component";
import { InfoMetricsComponent } from "../naregyme/info-metrics/info-metrics.component";
import { SuccessfulCasesComponent } from "../naregyme/successful-cases/successful-cases.component";
import { AppComponent } from "../naregyme/app/app.component";
import { ProgrammsCoursesComponent } from "../naregyme/programms-courses/programms-courses.component";
import { TrainersAndExpertsComponent } from "../naregyme/trainers-and-experts/trainers-and-experts.component";
import { ReviewsComponent } from "../naregyme/reviews/reviews.component";
import { MotivationComponent } from "../naregyme/motivation/motivation.component";
import { FreqAskedQuestionsComponent } from "../naregyme/freq-asked-questions/freq-asked-questions.component";
import { JoinToCommunityComponent } from "../naregyme/join-to-community/join-to-community.component";
import { AuthService } from '../../../core/services/auth.service';
import { FooterComponent } from "../../../core/components/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [AboutProjectComponent, InfoMetricsComponent, SuccessfulCasesComponent, AppComponent, ProgrammsCoursesComponent, TrainersAndExpertsComponent, ReviewsComponent, MotivationComponent, FreqAskedQuestionsComponent, JoinToCommunityComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private auth: AuthService) {

  }
}
