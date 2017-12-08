var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { CareerResultComponent } from './career-result.component';
import { CareerService } from './career.service';
var CareerComponent = (function () {
    function CareerComponent(careerService, resolver) {
        this.careerService = careerService;
        this.resolver = resolver;
        this.cmpArray = [];
        this.cmpRefArray = [];
        this.noResult = false;
    }
    CareerComponent.prototype.ngOnInit = function () {
    };
    CareerComponent.prototype.onSearch = function (input) {
        var _this = this;
        var title = input.value || input.placeholder;
        this.careerService.getJobs(title)
            .subscribe(function (response) {
            _this.onSearchResultsComplete(response);
        }, function (error) { return console.error(error); });
    };
    CareerComponent.prototype.onSearchResultsComplete = function (response) {
        for (var _i = 0, _a = this.cmpRefArray; _i < _a.length; _i++) {
            var i = _a[_i];
            i.destroy();
        }
        if (response.jobs == undefined) {
            this.noResult = true;
        }
        else {
            this.noResult = false;
            for (var i = 0; i < response.jobs.length; i++) {
                var c = response.jobs[i].company;
                var t = response.jobs[i].title;
                var d = response.jobs[i].description;
                var l = response.jobs[i].url;
                this.createComponent(c, t, d, l);
            }
        }
    };
    CareerComponent.prototype.createComponent = function (c, t, d, l) {
        var newComp = this.resolver.resolveComponentFactory(CareerResultComponent);
        var cmpRef = this.target.createComponent(newComp);
        var cmp = cmpRef.instance;
        cmp.company = c;
        cmp.title = t;
        cmp.description = d;
        cmp.url = l;
        this.cmpRefArray.push(cmpRef);
        this.cmpArray.push(cmp);
    };
    return CareerComponent;
}());
__decorate([
    ViewChild('target', { read: ViewContainerRef }),
    __metadata("design:type", Object)
], CareerComponent.prototype, "target", void 0);
CareerComponent = __decorate([
    Component({
        selector: 'app-career',
        templateUrl: './career.component.html'
    }),
    __metadata("design:paramtypes", [CareerService,
        ComponentFactoryResolver])
], CareerComponent);
export { CareerComponent };
//# sourceMappingURL=/Users/bishwajithalder/mashup-master/src/src/app/career/career.component.js.map