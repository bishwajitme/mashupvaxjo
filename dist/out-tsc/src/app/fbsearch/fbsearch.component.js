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
import { FbsearchResultComponent } from './fbsearch-result.component';
import { FbService } from '../services/facebook.service';
var FbsearchComponent = (function () {
    function FbsearchComponent(fbService, resolver) {
        this.fbService = fbService;
        this.resolver = resolver;
        this.cmpArray = [];
        this.cmpRefArray = [];
        this.noResult = false;
    }
    FbsearchComponent.prototype.ngOnInit = function () {
    };
    FbsearchComponent.prototype.onSearch = function (input) {
        var _this = this;
        var keyword = input.value || input.placeholder;
        this.fbService.getResults(keyword)
            .subscribe(function (response) {
            var responseData = _this.parseResponse(response['_body']);
            var items = responseData.data;
            _this.fbService.sharedFacebookData = responseData.data;
            _this.fbService.callComponentMethod();
            _this.onSearchResultsComplete(items);
        }, function (error) { return console.error(error); });
    };
    FbsearchComponent.prototype.parseResponse = function (responseData) {
        return JSON.parse(responseData);
    };
    FbsearchComponent.prototype.onSearchResultsComplete = function (response) {
        for (var _i = 0, _a = this.cmpRefArray; _i < _a.length; _i++) {
            var i = _a[_i];
            i.destroy();
        }
        if (response == 'null') {
            this.noResult = true;
        }
        else {
            this.noResult = false;
            for (var _b = 0, response_1 = response; _b < response_1.length; _b++) {
                var result = response_1[_b];
                var n = result.name;
                var c = result.checkins;
                var u = result.picture.data.url;
                var id = result.id;
                var lat = result.location.latitude;
                var lon = result.location.longitude;
                var description = result.description;
                var location_1 = '';
                if (result.location.street !== undefined) {
                    location_1 += result.location.street + ' ';
                }
                if (result.location.zip !== undefined) {
                    location_1 += result.location.zip + ' ';
                }
                if (result.location.city !== undefined) {
                    location_1 += result.location.city;
                }
                this.createComponent(n, c, u, id, description, location_1, lat, lon);
            }
        }
    };
    FbsearchComponent.prototype.createComponent = function (n, c, u, id, description, location, lat, lon) {
        var newComp = this.resolver.resolveComponentFactory(FbsearchResultComponent);
        var cmpRef = this.target.createComponent(newComp);
        var cmp = cmpRef.instance;
        cmp.name = n;
        cmp.checkin = c;
        cmp.url = u;
        cmp.id = id;
        cmp.description = description;
        cmp.location = location;
        cmp.lat = lat;
        cmp.lon = lon;
        this.cmpRefArray.push(cmpRef);
        this.cmpArray.push(cmp);
    };
    return FbsearchComponent;
}());
__decorate([
    ViewChild('target', { read: ViewContainerRef }),
    __metadata("design:type", Object)
], FbsearchComponent.prototype, "target", void 0);
FbsearchComponent = __decorate([
    Component({
        selector: 'app-fbsearch',
        templateUrl: './fbsearch.component.html'
    }),
    __metadata("design:paramtypes", [FbService,
        ComponentFactoryResolver])
], FbsearchComponent);
export { FbsearchComponent };
//# sourceMappingURL=/Users/bishwajithalder/mashup-master/src/src/app/fbsearch/fbsearch.component.js.map