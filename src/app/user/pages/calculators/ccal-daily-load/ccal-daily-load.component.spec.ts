import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcalDailyLoadComponent } from './ccal-daily-load.component';

describe('CcalDailyLoadComponent', () => {
  let component: CcalDailyLoadComponent;
  let fixture: ComponentFixture<CcalDailyLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcalDailyLoadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcalDailyLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
