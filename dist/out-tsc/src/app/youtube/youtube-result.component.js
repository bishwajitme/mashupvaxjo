var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var YoutubeResultComponent = (function () {
    function YoutubeResultComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.baseUrl = 'https://www.youtube.com/embed/';
    }
    YoutubeResultComponent.prototype.ngOnInit = function () {
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.videoID);
        console.log(this.url);
    };
    return YoutubeResultComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], YoutubeResultComponent.prototype, "videotitle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], YoutubeResultComponent.prototype, "videoID", void 0);
YoutubeResultComponent = __decorate([
    Component({
        selector: 'app-youtube-result',
        templateUrl: './youtube-result.component.html'
    }),
    __metadata("design:paramtypes", [DomSanitizer])
], YoutubeResultComponent);
export { YoutubeResultComponent };
//# sourceMappingURL=/Users/bishwajithalder/mashup-master/src/src/app/youtube/youtube-result.component.js.map