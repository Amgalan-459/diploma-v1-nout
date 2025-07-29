import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammSoursesComponent } from './programm-sourses.component';

describe('ProgrammSoursesComponent', () => {
  let component: ProgrammSoursesComponent;
  let fixture: ComponentFixture<ProgrammSoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammSoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammSoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
