/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { YoutubeComponent } from './youtube.component';
describe('youtubeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [YoutubeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(YoutubeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/bishwajithalder/mashup-master/src/src/app/youtube/youtube.component.spec.js.map