import { Component } from '@angular/core';
import { BasalMetabolismComponent } from "../basal-metabolism/basal-metabolism.component";
import { BodyFatPercentageComponent } from "../body-fat-percentage/body-fat-percentage.component";
import { CcalDailyLoadComponent } from "../ccal-daily-load/ccal-daily-load.component";

@Component({
  selector: 'app-main-calc',
  imports: [BasalMetabolismComponent, BodyFatPercentageComponent, CcalDailyLoadComponent],
  templateUrl: './main-calc.component.html',
  styleUrl: './main-calc.component.css'
})
export class MainCalcComponent {

}
