/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FssearchService } from './fssearch.service';

describe('Service: Fssearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FssearchService]
    });
  });

  it('should ...', inject([FssearchService], (service: FssearchService) => {
    expect(service).toBeTruthy();
  }));
});
