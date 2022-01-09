import { TestBed } from '@angular/core/testing';

import { OnStartupService } from './on-startup.service';

describe('OnStartupService', () => {
  let service: OnStartupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnStartupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
