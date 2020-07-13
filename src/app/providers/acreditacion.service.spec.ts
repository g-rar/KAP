import { TestBed } from '@angular/core/testing';

import { AcreditacionService } from './acreditacion.service';

describe('AcreditacionService', () => {
  let service: AcreditacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcreditacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
