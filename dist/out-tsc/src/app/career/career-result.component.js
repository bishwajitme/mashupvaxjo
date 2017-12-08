var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var CareerResultComponent = (function () {
    function CareerResultComponent() {
    }
    CareerResultComponent.prototype.ngOnInit = function () {
    };
    return CareerResultComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], CareerResultComponent.prototype, "company", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CareerResultComponent.prototype, "title", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CareerResultComponent.prototype, "description", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CareerResultComponent.prototype, "url", void 0);
CareerResultComponent = __decorate([
    Component({
        selector: 'app-career-result',
        templateUrl: './career-result.component.html'
    }),
    __metadata("design:paramtypes", [])
], CareerResultComponent);
export { CareerResultComponent };
//# sourceMappingURL=/Users/bishwajithalder/mashup-master/src/src/app/career/career-result.component.js.map