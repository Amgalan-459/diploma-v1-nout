import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyMrComponent } from './academy-mr.component';

describe('AcademyMrComponent', () => {
  let component: AcademyMrComponent;
  let fixture: ComponentFixture<AcademyMrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademyMrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademyMrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
