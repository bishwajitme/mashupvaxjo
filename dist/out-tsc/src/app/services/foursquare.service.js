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
var FoursquareService = (function () {
    function FoursquareService(http) {
        this.http = http;
        this.ClientID = "BOI4GRNURNA3LB3033GVEWVIQ44RI1CTV401URK3QU1KMBCH";
        this.ClientSecretID = "PK2AFHZ1GJQK5BYFDCMZXGCRO3EXII13JYVQNV3DFSQHOBYI";
        this.sharedFoursquareData = {};
        this.componentMethodCallSq = new Subject();
        this.componentMethodCalledSq$ = this.componentMethodCallSq.asObservable();
    }
    FoursquareService.prototype.callComponentMethod = function () {
        this.componentMethodCallSq.next();
        console.log(this.sharedFoursquareData);
    };
    FoursquareService.prototype.search = function (args) {
        var query = this.buildQueryString("search", args);
        return this.http.get(query);
    };
    FoursquareService.prototype.buildQueryString = function (method, args) {
        var URL = "https://api.foursquare.com/v2/venues/" + method + "?client_id=" + this.ClientID + "&client_secret=" + this.ClientSecretID + "&v=20130815&ll=56.8770413,14.8092744";
        return URL;
    };
    FoursquareService.prototype.searchByTerm = function (args) {
        var query = this.buildQueryStringSearch("search", args);
        return this.http.get(query);
    };
    FoursquareService.prototype.buildQueryStringSearch = function (method, args) {
        var URL = "https://api.foursquare.com/v2/venues/" + method + "?client_id=" + this.ClientID + "&client_secret=" + this.ClientSecretID + "&v=20130815&ll=56.8770413,14.8092744&radius=20000&limit=100";
        for (var property in args) {
            URL += "&" + property + "=" + args[property];
        }
        console.log(URL);
        return URL;
    };
    /* searching FOURSQUARE photo by api call */
    FoursquareService.prototype.photoSearch = function (photoID) {
        var URL = "https://api.foursquare.com/v2/venues/" + photoID + "/photos?client_id=BOI4GRNURNA3LB3033GVEWVIQ44RI1CTV401URK3QU1KMBCH&client_secret=PK2AFHZ1GJQK5BYFDCMZXGCRO3EXII13JYVQNV3DFSQHOBYI&v=20130815";
        //console.log(URL);
        return this.http.get(URL);
    };
    return FoursquareService;
}());
FoursquareService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], FoursquareService);
export { FoursquareService };
//# sourceMappingURL=/Users/bishwajithalder/mashup-master/src/src/app/services/foursquare.service.js.map