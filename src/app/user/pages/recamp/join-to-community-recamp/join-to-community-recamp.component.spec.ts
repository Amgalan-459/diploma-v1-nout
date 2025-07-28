import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinToCommunityRecampComponent } from './join-to-community-recamp.component';

describe('JoinToCommunityRecampComponent', () => {
  let component: JoinToCommunityRecampComponent;
  let fixture: ComponentFixture<JoinToCommunityRecampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinToCommunityRecampComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinToCommunityRecampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
