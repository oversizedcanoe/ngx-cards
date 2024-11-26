import { TestBed } from '@angular/core/testing';

import { NgxCardsService } from './ngx-cards.service';

describe('NgxCardsService', () => {
  let service: NgxCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
