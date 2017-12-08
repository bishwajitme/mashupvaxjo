/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { FssearchResultComponent } from './fssearch-result.component';
describe('FssearchResultComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FssearchResultComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FssearchResultComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/bishwajithalder/mashup-master/src/src/app/fssearch/fssearch-result.component.spec.js.map