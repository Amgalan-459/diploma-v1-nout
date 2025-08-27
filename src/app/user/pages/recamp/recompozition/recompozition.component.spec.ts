import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecompozitionComponent } from './recompozition.component';

describe('RecompozitionComponent', () => {
  let component: RecompozitionComponent;
  let fixture: ComponentFixture<RecompozitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecompozitionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecompozitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
