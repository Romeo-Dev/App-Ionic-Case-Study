import { TestBed } from '@angular/core/testing';

import { WpdetailsService } from './wpdetails.service';

describe('WpdetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WpdetailsService = TestBed.get(WpdetailsService);
    expect(service).toBeTruthy();
  });
});
