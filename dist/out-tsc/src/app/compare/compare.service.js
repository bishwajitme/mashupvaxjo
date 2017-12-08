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
var CompareService = (function () {
    function CompareService(http) {
        this.http = http;
    }
    CompareService.prototype.getDate = function (day, month, year, town) {
        // let url = 'http://localhost/~janosch/php/CompareService.php?day=' + day + '&month=' + month + '&year=' + year + '&town=' + town;
        var url = 'http://celtest1.lnu.se/mashup/php/CompareService.php?day=' + day + '&month=' + month + '&year=' + year + '&town=' + town;
        // let url = 'dist/php/CompareService.php?day=' + day + '&month=' + month + '&year=' + year + '&town=' + town;
        console.log(url);
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    return CompareService;
}());
CompareService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], CompareService);
export { CompareService };
//# sourceMappingURL=/Users/bishwajithalder/mashup-master/src/src/app/compare/compare.service.js.map