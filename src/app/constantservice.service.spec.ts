import { TestBed } from '@angular/core/testing';

import { ConstantserviceService } from './constantservice.service';

describe('ConstantserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConstantserviceService = TestBed.get(ConstantserviceService);
    expect(service).toBeTruthy();
  });
});
