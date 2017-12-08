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
import { CompareResultComponent } from './compare-result.component';
import { CompareService } from './compare.service';
var CompareComponent = (function () {
    function CompareComponent(compareService, resolver) {
        this.compareService = compareService;
        this.resolver = resolver;
    }
    CompareComponent.prototype.ngOnInit = function () {
        this.initDateElement();
    };
    CompareComponent.prototype.initDateElement = function () {
        var date = new Date();
        var dateString = date.getFullYear() + '/';
        dateString += (date.getMonth() + 1) + '/';
        dateString += date.getDate();
        this.datePlaceholder = dateString;
    };
    CompareComponent.prototype.onSubmit = function (elmTown, elmDate, $event) {
        var _this = this;
        if (this.cmpRef) {
            this.destroyCompareResult();
        }
        var date = elmDate.inputText || elmDate.placeholder;
        date = new Date(Date.parse(date));
        this.town = elmTown.value || elmTown.placeholder;
        this.loading = true;
        if (elmDate) {
            this.compareService.getDate(date.getDate(), date.getMonth(), date.getFullYear(), this.town)
                .subscribe(function (response) {
                _this.onSearchResultsComplete(response);
            }, function (error) { return console.error(error); });
        }
    };
    CompareComponent.prototype.onSearchResultsComplete = function (data) {
        var _this = this;
        this.loading = false;
        var newComp = this.resolver.resolveComponentFactory(CompareResultComponent);
        this.cmpRef = this.target.createComponent(newComp);
        this.cmp = this.cmpRef.instance;
        this.cmp.vxu = 'Växjö';
        this.cmp.town = this.town;
        this.cmp.vxuText = this.validateResult(data.vxuText);
        this.cmp.townText = this.validateResult(data.townText);
        this.cmp.destroyResult.subscribe(function () { return _this.destroyCompareResult(); });
    };
    CompareComponent.prototype.validateResult = function (data) {
        if (data === undefined) {
            data = 'No available weather information found during search.';
        }
        return data;
    };
    CompareComponent.prototype.destroyCompareResult = function () {
        this.cmpRef.destroy();
    };
    return CompareComponent;
}());
__decorate([
    ViewChild('target', { read: ViewContainerRef }),
    __metadata("design:type", Object)
], CompareComponent.prototype, "target", void 0);
CompareComponent = __decorate([
    Component({
        selector: 'app-compare',
        templateUrl: './compare.component.html'
    }),
    __metadata("design:paramtypes", [CompareService, ComponentFactoryResolver])
], CompareComponent);
export { CompareComponent };
//# sourceMappingURL=/Users/bishwajithalder/mashup-master/src/src/app/compare/compare.component.js.map