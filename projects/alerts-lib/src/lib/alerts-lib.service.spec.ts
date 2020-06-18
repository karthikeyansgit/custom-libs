import { TestBed } from '@angular/core/testing';

import { AlertsLibService } from './alerts-lib.service';

describe('AlertsLibService', () => {
  let service: AlertsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
