import { TestBed } from '@angular/core/testing';

import { GreetService } from './greet.service';

describe('GreetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GreetService = TestBed.get(GreetService);
    expect(service).toBeTruthy();
  });

  it('Say hello to me', () => {
    const service: GreetService = TestBed.get(GreetService);
    expect(service.greet('me')).toBe('Hello me!');
  })
});
