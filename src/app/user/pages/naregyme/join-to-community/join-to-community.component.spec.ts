import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinToCommunityComponent } from './join-to-community.component';

describe('JoinToCommunityComponent', () => {
  let component: JoinToCommunityComponent;
  let fixture: ComponentFixture<JoinToCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinToCommunityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinToCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
