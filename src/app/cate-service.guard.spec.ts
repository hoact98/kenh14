import { TestBed } from '@angular/core/testing';

import { CateServiceGuard } from './cate-service.guard';

describe('CateServiceGuard', () => {
  let guard: CateServiceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CateServiceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
