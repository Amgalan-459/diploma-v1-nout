import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowladgeBaseComponent } from './knowladge-base.component';

describe('KnowladgeBaseComponent', () => {
  let component: KnowladgeBaseComponent;
  let fixture: ComponentFixture<KnowladgeBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowladgeBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowladgeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
