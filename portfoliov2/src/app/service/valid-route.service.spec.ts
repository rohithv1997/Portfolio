import { TestBed } from '@angular/core/testing';

import { ValidRouteService } from './valid-route.service';

describe('ValidRouteService', () => {
  let service: ValidRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
