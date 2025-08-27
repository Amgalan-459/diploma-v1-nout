import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRecampComponent } from './main-recamp.component';

describe('MainRecampComponent', () => {
  let component: MainRecampComponent;
  let fixture: ComponentFixture<MainRecampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainRecampComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainRecampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
