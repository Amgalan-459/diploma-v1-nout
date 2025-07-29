import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowladgeBaseLibraryComponent } from './knowladge-base-library.component';

describe('KnowladgeBaseLibraryComponent', () => {
  let component: KnowladgeBaseLibraryComponent;
  let fixture: ComponentFixture<KnowladgeBaseLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowladgeBaseLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowladgeBaseLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
