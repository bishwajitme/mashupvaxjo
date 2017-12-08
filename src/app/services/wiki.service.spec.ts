import { TestBed, async, inject } from '@angular/core/testing';
import { WikiService } from './wiki.service';

describe('Service: Flickr', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [WikiService]
        });
    });

    it('should ...', inject([WikiService], (service: WikiService) => {
        expect(service).toBeTruthy();
    }));
});
