import { TestBed } from '@angular/core/testing';

import { DonatePayService } from './donate-pay.service';

describe('DonatePayService', () => {
  let service: DonatePayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonatePayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
