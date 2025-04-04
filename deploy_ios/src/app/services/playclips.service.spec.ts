import { TestBed } from '@angular/core/testing';

import { PlayclipsService } from './playclips.service';

describe('PlayclipsService', () => {
  let service: PlayclipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayclipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
