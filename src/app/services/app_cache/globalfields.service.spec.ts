import { TestBed } from '@angular/core/testing';

import { GlobalfieldsService } from './globalfields.service';

describe('GlobalfieldsService', () => {
  let service: GlobalfieldsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalfieldsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
