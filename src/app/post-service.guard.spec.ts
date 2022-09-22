import { TestBed } from '@angular/core/testing';

import { PostServiceGuard } from './post-service.guard';

describe('PostServiceGuard', () => {
  let guard: PostServiceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PostServiceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
