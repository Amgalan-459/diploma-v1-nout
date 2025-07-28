import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoesVideosFromEventsComponent } from './fotoes-videos-from-events.component';

describe('FotoesVideosFromEventsComponent', () => {
  let component: FotoesVideosFromEventsComponent;
  let fixture: ComponentFixture<FotoesVideosFromEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FotoesVideosFromEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoesVideosFromEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
