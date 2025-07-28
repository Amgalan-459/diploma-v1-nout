import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammsCoursesComponent } from './programms-courses.component';

describe('ProgrammsCoursesComponent', () => {
  let component: ProgrammsCoursesComponent;
  let fixture: ComponentFixture<ProgrammsCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammsCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammsCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
