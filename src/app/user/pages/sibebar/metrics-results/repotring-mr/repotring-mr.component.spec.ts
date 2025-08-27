import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepotringMrComponent } from './repotring-mr.component';

describe('RepotringMrComponent', () => {
  let component: RepotringMrComponent;
  let fixture: ComponentFixture<RepotringMrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepotringMrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepotringMrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
