import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSbComponent } from './review-sb.component';

describe('ReviewSbComponent', () => {
  let component: ReviewSbComponent;
  let fixture: ComponentFixture<ReviewSbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewSbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewSbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
