import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMetricsComponent } from './info-metrics.component';

describe('InfoMetricsComponent', () => {
  let component: InfoMetricsComponent;
  let fixture: ComponentFixture<InfoMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoMetricsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
