import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersAndExpertsComponent } from './trainers-and-experts.component';

describe('TrainersAndExpertsComponent', () => {
  let component: TrainersAndExpertsComponent;
  let fixture: ComponentFixture<TrainersAndExpertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainersAndExpertsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainersAndExpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
