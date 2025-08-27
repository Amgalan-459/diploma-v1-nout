import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPlanMrComponent } from './food-plan-mr.component';

describe('FoodPlanMrComponent', () => {
  let component: FoodPlanMrComponent;
  let fixture: ComponentFixture<FoodPlanMrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodPlanMrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodPlanMrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
