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
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';
var FbService = (function () {
    function FbService(http) {
        this.http = http;
        this.sharedFacebookData = {};
        this.componentMethodCallSource = new Subject();
        this.componentMethodCalled$ = this.componentMethodCallSource.asObservable();
    }
    FbService.prototype.callComponentMethod = function () {
        this.componentMethodCallSource.next();
    };
    FbService.prototype.getResults = function (keyword) {
        var url = "https://graph.facebook.com/v2.11/search?type=place&q=" + keyword + "&center=56.8770413,14.8092744&distance=1000&fields=name,checkins,picture,description,location,hours&access_token=2040144306206867|23e390ccd395736bfc12c2fd5cec9297";
        // API call
        return this.http.get(url);
    };
    return FbService;
}());
FbService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], FbService);
export { FbService };
//# sourceMappingURL=/Users/bishwajithalder/mashup-master/src/src/app/services/facebook.service.js.map