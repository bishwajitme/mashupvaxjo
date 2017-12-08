/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { WikiResultComponent } from './wiki-result.component';
describe('WikiResultComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [WikiResultComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(WikiResultComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/bishwajithalder/mashup-master/src/src/app/wiki/wiki-result.component.spec.js.map