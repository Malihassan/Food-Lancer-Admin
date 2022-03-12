import { TestBed } from '@angular/core/testing';

import { CoverageAreaService } from './coverage-area.service';

describe('CoverageAreaService', () => {
  let service: CoverageAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoverageAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
