import { TestBed } from '@angular/core/testing';

import { DestrixService } from './destrix.service';

describe('DestrixService', () => {
  let service: DestrixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestrixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
