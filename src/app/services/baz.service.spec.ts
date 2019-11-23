import { TestBed } from '@angular/core/testing';

import { BazService } from './baz.service';

describe('BazService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BazService = TestBed.get(BazService);
    expect(service).toBeTruthy();
  });
});
