/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { WeatherComponent } from './weather.component';
describe('WeatherComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [WeatherComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(WeatherComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/bishwajithalder/mashup-master/src/src/app/weather/weather.component.spec.js.map