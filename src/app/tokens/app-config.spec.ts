import { TestBed } from "@angular/core/testing";
import { APP_CONFIG } from './app-config';

describe('tokens.app-config', () => {
  it('constant value', () => {
    expect(TestBed.get(APP_CONFIG).title).toBe('my application');
  });
});