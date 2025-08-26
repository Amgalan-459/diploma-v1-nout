import { TestBed } from '@angular/core/testing';

import { ExerciseRawService } from './exercise-raw.service';

describe('ExerciseRawService', () => {
  let service: ExerciseRawService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseRawService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
