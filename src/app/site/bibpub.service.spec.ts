import { TestBed } from '@angular/core/testing';

import { BibpubService } from './bibpub.service';

describe('BibpubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BibpubService = TestBed.get(BibpubService);
    expect(service).toBeTruthy();
  });
});
