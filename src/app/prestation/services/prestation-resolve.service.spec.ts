import { TestBed } from '@angular/core/testing';

import { PrestationResolveService } from './prestation-resolve.service';

describe('PrestationResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrestationResolveService = TestBed.get(PrestationResolveService);
    expect(service).toBeTruthy();
  });
});
