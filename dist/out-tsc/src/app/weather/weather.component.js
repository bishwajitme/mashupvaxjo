var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
var WeatherComponent = (function () {
    function WeatherComponent(weatherService) {
        this.weatherService = weatherService;
        this.forecasts = [];
    }
    WeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.weatherService.getWheather()
            .subscribe(function (data) {
            _this.createWeatherForecasts(data);
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    WeatherComponent.prototype.createWeatherForecasts = function (data) {
        data = data.forecast.txt_forecast.forecastday;
        for (var i = 0; i < data.length; i += 2) {
            var dayStr = this.formatDay(data[i].title);
            var forecastObj = { day: dayStr, icon: data[i].icon_url, description: data[i].fcttext_metric };
            this.forecasts.push(forecastObj);
        }
    };
    WeatherComponent.prototype.formatDay = function (day) {
        var result = '';
        switch (day.toUpperCase()) {
            case 'MONDAY':
                result = 'Mon';
                break;
            case 'TUESDAY':
                result = 'Tue';
                break;
            case 'WEDNESDAY':
                result = 'Wed';
                break;
            case 'THURSDAY':
                result = 'Thu';
                break;
            case 'FRIDAY':
                result = 'Fri';
                break;
            case 'SATURDAY':
                result = 'Sat';
                break;
            case 'Sunday':
                result = 'Sun';
                break;
        }
        return result;
    };
    return WeatherComponent;
}());
WeatherComponent = __decorate([
    Component({
        selector: 'app-weather',
        templateUrl: './weather.component.html'
    }),
    __metadata("design:paramtypes", [WeatherService])
], WeatherComponent);
export { WeatherComponent };
//# sourceMappingURL=/Users/bishwajithalder/mashup-master/src/src/app/weather/weather.component.js.map