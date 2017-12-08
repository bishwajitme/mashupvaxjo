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
var FssearchService = (function () {
    function FssearchService(http) {
        this.http = http;
        this.ClientID = "BOI4GRNURNA3LB3033GVEWVIQ44RI1CTV401URK3QU1KMBCH";
        this.ClientSecretID = "PK2AFHZ1GJQK5BYFDCMZXGCRO3EXII13JYVQNV3DFSQHOBYI";
    }
    FssearchService.prototype.getResults = function (keyword) {
        var url = "https://api.foursquare.com/v2/venues/search?client_id=" + this.ClientID + "&client_secret=" + this.ClientSecretID + "&v=20130815&ll=56.8770413,14.8092744&query=" + keyword;
        // let url = 'dist/php/CareerService.php?title=' + title;
        return this.http.get(url);
    };
    return FssearchService;
}());
FssearchService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], FssearchService);
export { FssearchService };
//# sourceMappingURL=/Users/bishwajithalder/mashup-master/src/src/app/fssearch/fssearch.service.js.map