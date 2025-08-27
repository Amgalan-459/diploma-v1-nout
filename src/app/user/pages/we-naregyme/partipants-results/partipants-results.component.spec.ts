import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartipantsResultsComponent } from './partipants-results.component';

describe('PartipantsResultsComponent', () => {
  let component: PartipantsResultsComponent;
  let fixture: ComponentFixture<PartipantsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartipantsResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartipantsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
