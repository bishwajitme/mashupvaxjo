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
var WikiService = (function () {
    // APIKey:string = "373937260aa0697f912fe74d747c9201";
    function WikiService(http) {
        this.http = http;
    }
    WikiService.prototype.search = function (args) {
        var query = this.buildQueryString("query", args);
        return this.http.get(query);
    };
    WikiService.prototype.buildQueryString = function (method, args) {
        var URL = "https://en.wikipedia.org/w/api.php?action=" + method + "&list=geosearch&gsradius=10000&format=json&origin=*&gscoord=56.8770413|14.8092744";
        return URL;
    };
    return WikiService;
}());
WikiService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], WikiService);
export { WikiService };
//# sourceMappingURL=/Users/bishwajithalder/mashup-master/src/src/app/services/wiki.service.js.map