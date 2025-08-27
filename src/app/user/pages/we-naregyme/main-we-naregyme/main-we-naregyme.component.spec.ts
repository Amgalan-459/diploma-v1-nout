import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWeNaregymeComponent } from './main-we-naregyme.component';

describe('MainWeNaregymeComponent', () => {
  let component: MainWeNaregymeComponent;
  let fixture: ComponentFixture<MainWeNaregymeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainWeNaregymeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainWeNaregymeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
