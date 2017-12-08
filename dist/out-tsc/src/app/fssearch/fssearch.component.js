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
import { FssearchResultComponent } from './fssearch-result.component';
import { FoursquareService } from '../services/foursquare.service';
var FssearchComponent = (function () {
    function FssearchComponent(fssearchService, resolver) {
        this.fssearchService = fssearchService;
        this.resolver = resolver;
        this.cmpArrayFs = [];
        this.cmpRefArrayFs = [];
        this.noResult = false;
    }
    FssearchComponent.prototype.ngOnInit = function () {
    };
    FssearchComponent.prototype.onSearch = function (input) {
        var _this = this;
        var keyword = input.value || input.placeholder;
        var args = { query: keyword };
        this.fssearchService.searchByTerm(args)
            .subscribe(function (response) {
            var responseData = _this.parseResponse(response['_body']);
            var items = responseData.response.venues;
            _this.fssearchService.sharedFoursquareData = responseData.response.venues;
            _this.fssearchService.callComponentMethod();
            _this.onSearchResultsComplete(items);
        }, function (error) { return console.error(error); });
    };
    FssearchComponent.prototype.parseResponse = function (responseData) {
        return JSON.parse(responseData);
    };
    FssearchComponent.prototype.onSearchResultsComplete = function (response) {
        var _this = this;
        for (var _i = 0, _a = this.cmpRefArrayFs; _i < _a.length; _i++) {
            var i = _a[_i];
            i.destroy();
        }
        if (response == 'null') {
            this.noResult = true;
        }
        else {
            this.noResult = false;
            var _loop_1 = function (result) {
                var n = result.name;
                var c = result.stats.checkinsCount;
                var fid = result.id;
                var lat = result.location.lat;
                var lon = result.location.lng;
                var photo_url = '';
                this_1.fssearchService.photoSearch(fid)
                    .subscribe(function (response) {
                    var responseData = _this.parseResponse(response['_body']);
                    var photos = responseData.response.photos.items;
                    for (var _i = 0, photos_1 = photos; _i < photos_1.length; _i++) {
                        var photoitem = photos_1[_i];
                        var prefix = photoitem.prefix;
                        var suffix = photoitem.suffix;
                        photo_url = prefix + "100x100" + suffix;
                    }
                    _this.createComponent(n, c, fid, lat, lon, photo_url);
                });
            };
            var this_1 = this;
            for (var _b = 0, response_1 = response; _b < response_1.length; _b++) {
                var result = response_1[_b];
                _loop_1(result);
            }
        }
    };
    FssearchComponent.prototype.createComponent = function (n, c, id, lat, lon, photo_url) {
        var newComp = this.resolver.resolveComponentFactory(FssearchResultComponent);
        var cmpRef = this.target.createComponent(newComp);
        var cmp = cmpRef.instance;
        cmp.fsname = n;
        cmp.fscheckin = c;
        cmp.fsid = id;
        cmp.fslat = lat;
        cmp.fslon = lon;
        cmp.photo_url = photo_url;
        this.cmpRefArrayFs.push(cmpRef);
        this.cmpArrayFs.push(cmp);
    };
    return FssearchComponent;
}());
__decorate([
    ViewChild('target', { read: ViewContainerRef }),
    __metadata("design:type", Object)
], FssearchComponent.prototype, "target", void 0);
FssearchComponent = __decorate([
    Component({
        selector: 'app-fssearch',
        templateUrl: './fssearch.component.html'
    }),
    __metadata("design:paramtypes", [FoursquareService,
        ComponentFactoryResolver])
], FssearchComponent);
export { FssearchComponent };
//# sourceMappingURL=/Users/bishwajithalder/mashup-master/src/src/app/fssearch/fssearch.component.js.map