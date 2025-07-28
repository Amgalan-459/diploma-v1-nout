import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyFatPercentageComponent } from './body-fat-percentage.component';

describe('BodyFatPercentageComponent', () => {
  let component: BodyFatPercentageComponent;
  let fixture: ComponentFixture<BodyFatPercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyFatPercentageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyFatPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
