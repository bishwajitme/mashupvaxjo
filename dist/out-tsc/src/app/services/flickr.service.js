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
var FlickrService = (function () {
    function FlickrService(http) {
        this.http = http;
        this.APIKey = "de2bb56442579c1a92a25726cd5223d4";
    }
    FlickrService.prototype.search = function (args) {
        var query = this.buildQueryString("flickr.photos.search", args);
        return this.http.get(query);
    };
    FlickrService.prototype.buildQueryString = function (method, args) {
        var URL = "https://www.flickr.com/services/rest/?method=" + method + "&api_key=" + this.APIKey + "&format=json&jsoncallback=?";
        for (var property in args) {
            URL += "&" + property + "=" + args[property];
        }
        return URL;
    };
    FlickrService.prototype.getLocation = function (id) {
        var object = { photo_id: id };
        var query = this.buildQueryString("flickr.photos.geo.getLocation", object);
        return this.http.get(query);
    };
    ;
    return FlickrService;
}());
FlickrService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], FlickrService);
export { FlickrService };
//# sourceMappingURL=/Users/bishwajithalder/mashup-master/src/src/app/services/flickr.service.js.map