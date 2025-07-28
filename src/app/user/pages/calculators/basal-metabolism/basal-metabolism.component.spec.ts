import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasalMetabolismComponent } from './basal-metabolism.component';

describe('BasalMetabolismComponent', () => {
  let component: BasalMetabolismComponent;
  let fixture: ComponentFixture<BasalMetabolismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasalMetabolismComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasalMetabolismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
