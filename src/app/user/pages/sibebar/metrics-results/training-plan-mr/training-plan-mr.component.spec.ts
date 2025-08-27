import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPlanMrComponent } from './training-plan-mr.component';

describe('TrainingPlanMrComponent', () => {
  let component: TrainingPlanMrComponent;
  let fixture: ComponentFixture<TrainingPlanMrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingPlanMrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingPlanMrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
