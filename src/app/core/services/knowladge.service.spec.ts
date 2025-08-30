import { TestBed } from '@angular/core/testing';

import { KnowladgeService } from './knowladge.service';

describe('KnowladgeService', () => {
  let service: KnowladgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnowladgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
