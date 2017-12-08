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
import { WikiResultComponent } from './wiki-result.component';
import { WikiService } from './wiki.service';
var WikiComponent = (function () {
    function WikiComponent(wikiService, resolver) {
        this.wikiService = wikiService;
        this.resolver = resolver;
        this.cmpArray = [];
        this.cmpRefArray = [];
        this.noResult = false;
    }
    WikiComponent.prototype.ngOnInit = function () {
    };
    WikiComponent.prototype.onSearch = function (input) {
        var _this = this;
        var title = input.value || input.placeholder;
        this.wikiService.getResults(title)
            .subscribe(function (response) {
            var responseData = _this.parseResponse(response['_body']);
            var items = responseData.query.search;
            console.log(responseData);
            _this.onSearchResultsComplete(items);
        }, function (error) { return console.error(error); });
    };
    WikiComponent.prototype.onSearchResultsComplete = function (response) {
        for (var _i = 0, _a = this.cmpRefArray; _i < _a.length; _i++) {
            var i = _a[_i];
            i.destroy();
        }
        if (response == 'null') {
            this.noResult = true;
        }
        else {
            this.noResult = false;
            for (var _b = 0, response_1 = response; _b < response_1.length; _b++) {
                var result = response_1[_b];
                var title = result.title;
                var description = result.snippet;
                var wikiPageId = result.pageid;
                this.createComponent(wikiPageId, title, description);
            }
        }
    };
    WikiComponent.prototype.parseResponse = function (responseData) {
        return JSON.parse(responseData);
    };
    WikiComponent.prototype.createComponent = function (wikiPageId, title, description) {
        var newComp = this.resolver.resolveComponentFactory(WikiResultComponent);
        var cmpRef = this.target.createComponent(newComp);
        var cmp = cmpRef.instance;
        cmp.id = wikiPageId;
        cmp.title = title;
        cmp.description = description;
        this.cmpRefArray.push(cmpRef);
        this.cmpArray.push(cmp);
    };
    return WikiComponent;
}());
__decorate([
    ViewChild('target', { read: ViewContainerRef }),
    __metadata("design:type", Object)
], WikiComponent.prototype, "target", void 0);
WikiComponent = __decorate([
    Component({
        selector: 'app-wiki',
        templateUrl: './wiki.component.html'
    }),
    __metadata("design:paramtypes", [WikiService,
        ComponentFactoryResolver])
], WikiComponent);
export { WikiComponent };
//# sourceMappingURL=/Users/bishwajithalder/mashup-master/src/src/app/wiki/wiki.component.js.map