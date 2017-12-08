/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { FbsearchResultComponent } from './fbsearch-result.component';
describe('FbsearchResultComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FbsearchResultComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FbsearchResultComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/bishwajithalder/mashup-master/src/src/app/fbsearch/fbsearch-result.component.spec.js.map