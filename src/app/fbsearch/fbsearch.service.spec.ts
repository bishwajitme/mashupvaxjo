/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FbsearchService } from './fbsearch.service';

describe('Service: Fbsearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FbsearchService]
    });
  });

  it('should ...', inject([FbsearchService], (service: FbsearchService) => {
    expect(service).toBeTruthy();
  }));
});
