import { TestBed } from '@angular/core/testing';

import { AcreditationRegisterService } from './acreditation-register.service';

describe('AcreditationRegisterService', () => {
  let service: AcreditationRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcreditationRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
