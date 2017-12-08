var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
var CompareResultComponent = (function () {
    function CompareResultComponent() {
        this.destroyResult = new EventEmitter();
    }
    CompareResultComponent.prototype.ngOnInit = function () {
    };
    CompareResultComponent.prototype.destroy = function () {
        this.destroyResult.emit();
    };
    return CompareResultComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], CompareResultComponent.prototype, "vxu", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CompareResultComponent.prototype, "town", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CompareResultComponent.prototype, "vxuText", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CompareResultComponent.prototype, "townText", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CompareResultComponent.prototype, "destroyResult", void 0);
CompareResultComponent = __decorate([
    Component({
        selector: 'app-compare-result',
        templateUrl: './compare-result.component.html'
    }),
    __metadata("design:paramtypes", [])
], CompareResultComponent);
export { CompareResultComponent };
//# sourceMappingURL=/Users/bishwajithalder/mashup-master/src/src/app/compare/compare-result.component.js.map