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
import { YoutubeResultComponent } from './youtube-result.component';
import { YoutubeService } from '../services/youtube.service';
var YoutubeComponent = (function () {
    function YoutubeComponent(youtubeService, resolver) {
        this.youtubeService = youtubeService;
        this.resolver = resolver;
        this.cmpArrayFs = [];
        this.cmpRefArrayFs = [];
        this.noResult = false;
    }
    YoutubeComponent.prototype.ngOnInit = function () {
    };
    YoutubeComponent.prototype.onSearch = function () {
        var _this = this;
        this.youtubeService.search(5)
            .subscribe(function (response) {
            var responseData = _this.parseResponse(response['_body']);
            var items = responseData.items;
            _this.onSearchResultsComplete(items);
        }, function (error) { return console.error(error); });
    };
    YoutubeComponent.prototype.parseResponse = function (responseData) {
        return JSON.parse(responseData);
    };
    YoutubeComponent.prototype.onSearchResultsComplete = function (response) {
        for (var _i = 0, _a = this.cmpRefArrayFs; _i < _a.length; _i++) {
            var i = _a[_i];
            i.destroy();
        }
        if (response == 'null') {
            this.noResult = true;
        }
        else {
            this.noResult = false;
            for (var _b = 0, response_1 = response; _b < response_1.length; _b++) {
                var item = response_1[_b];
                var videoid = item.id.videoId;
                var videotitle = item.snippet.title;
                this.createComponent(videoid, videotitle);
            }
        }
    };
    YoutubeComponent.prototype.createComponent = function (videoID, videotitle) {
        var newComp = this.resolver.resolveComponentFactory(YoutubeResultComponent);
        var cmpRef = this.target.createComponent(newComp);
        var cmp = cmpRef.instance;
        cmp.videoID = videoID;
        cmp.videotitle = videotitle;
        this.cmpRefArrayFs.push(cmpRef);
        this.cmpArrayFs.push(cmp);
    };
    return YoutubeComponent;
}());
__decorate([
    ViewChild('target', { read: ViewContainerRef }),
    __metadata("design:type", Object)
], YoutubeComponent.prototype, "target", void 0);
YoutubeComponent = __decorate([
    Component({
        selector: 'app-youtube',
        templateUrl: './youtube.component.html'
    }),
    __metadata("design:paramtypes", [YoutubeService,
        ComponentFactoryResolver])
], YoutubeComponent);
export { YoutubeComponent };
//# sourceMappingURL=/Users/bishwajithalder/mashup-master/src/src/app/youtube/youtube.component.js.map