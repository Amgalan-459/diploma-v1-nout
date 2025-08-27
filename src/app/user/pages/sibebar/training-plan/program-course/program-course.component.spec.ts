import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramCourseComponent } from './program-course.component';

describe('ProgramCourseComponent', () => {
  let component: ProgramCourseComponent;
  let fixture: ComponentFixture<ProgramCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
