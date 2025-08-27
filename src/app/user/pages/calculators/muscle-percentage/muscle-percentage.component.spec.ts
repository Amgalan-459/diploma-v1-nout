import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusclePercentageComponent } from './muscle-percentage.component';

describe('MusclePercentageComponent', () => {
  let component: MusclePercentageComponent;
  let fixture: ComponentFixture<MusclePercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusclePercentageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusclePercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
