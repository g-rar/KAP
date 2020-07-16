import { TestBed } from '@angular/core/testing';

import { AccreditationDataService } from './accreditation-data.service';

describe('AccreditationDataService', () => {
  let service: AccreditationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccreditationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
