import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseMrComponent } from './base-mr.component';

describe('BaseMrComponent', () => {
  let component: BaseMrComponent;
  let fixture: ComponentFixture<BaseMrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseMrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseMrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
