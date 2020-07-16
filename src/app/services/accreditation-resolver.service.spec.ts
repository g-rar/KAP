import { TestBed } from '@angular/core/testing';

import { AccreditationResolverService } from './accreditation-resolver.service';

describe('AccreditationResolverService', () => {
  let service: AccreditationResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccreditationResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
