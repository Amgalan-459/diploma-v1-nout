import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowladgeBaseMoreComponent } from './knowladge-base-more.component';

describe('KnowladgeBaseMoreComponent', () => {
  let component: KnowladgeBaseMoreComponent;
  let fixture: ComponentFixture<KnowladgeBaseMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowladgeBaseMoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowladgeBaseMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
