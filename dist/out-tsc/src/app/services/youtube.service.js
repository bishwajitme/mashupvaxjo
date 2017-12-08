var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
var YoutubeService = (function () {
    function YoutubeService(http) {
        this.http = http;
        this.APIKey = "AIzaSyABc5RAHJno_ZuJ07Ua32WTrMJR82oS_Us";
    }
    YoutubeService.prototype.search = function (args) {
        var query = this.buildQueryString("snippet", args);
        return this.http.get(query);
    };
    YoutubeService.prototype.buildQueryString = function (method, args) {
        var URL = "https://www.googleapis.com/youtube/v3/search?part=" + method + "&key=" + this.APIKey + "&locationRadius=15km&maxResults=50&order=date&type=video&location=56.8770413%2C+14.8092744";
        return URL;
    };
    /* searching geolocation info for video by api call */
    YoutubeService.prototype.getLocation = function (id) {
        var vid = { id: id };
        var url = "https://www.googleapis.com/youtube/v3/videos?part=recordingDetails&key=" + this.APIKey + "&id=" + id;
        return this.http.get(url);
    };
    ;
    return YoutubeService;
}());
YoutubeService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], YoutubeService);
export { YoutubeService };
//# sourceMappingURL=/Users/bishwajithalder/mashup-master/src/src/app/services/youtube.service.js.map