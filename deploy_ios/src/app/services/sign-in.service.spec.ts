import { TestBed } from '@angular/core/testing';

import { SigninService } from './sign-in.service';

describe('SignInService', () => {
  let service: SigninService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigninService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
