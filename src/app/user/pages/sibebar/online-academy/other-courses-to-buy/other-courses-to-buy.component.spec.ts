import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCoursesToBuyComponent } from './other-courses-to-buy.component';

describe('OtherCoursesToBuyComponent', () => {
  let component: OtherCoursesToBuyComponent;
  let fixture: ComponentFixture<OtherCoursesToBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherCoursesToBuyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherCoursesToBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
