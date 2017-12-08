/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { YoutubeResultComponent } from './youtube-result.component';
describe('YoutubeResultComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [YoutubeResultComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(YoutubeResultComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/bishwajithalder/mashup-master/src/src/app/youtube/youtube-result.component.spec.js.map