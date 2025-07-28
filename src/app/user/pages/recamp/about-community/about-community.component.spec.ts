import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCommunityComponent } from './about-community.component';

describe('AboutCommunityComponent', () => {
  let component: AboutCommunityComponent;
  let fixture: ComponentFixture<AboutCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutCommunityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
