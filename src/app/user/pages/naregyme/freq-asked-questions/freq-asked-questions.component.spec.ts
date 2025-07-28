import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreqAskedQuestionsComponent } from './freq-asked-questions.component';

describe('FreqAskedQuestionsComponent', () => {
  let component: FreqAskedQuestionsComponent;
  let fixture: ComponentFixture<FreqAskedQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreqAskedQuestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreqAskedQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
