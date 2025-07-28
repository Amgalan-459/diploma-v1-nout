import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulCasesComponent } from './successful-cases.component';

describe('SuccessfulCasesComponent', () => {
  let component: SuccessfulCasesComponent;
  let fixture: ComponentFixture<SuccessfulCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessfulCasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessfulCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
