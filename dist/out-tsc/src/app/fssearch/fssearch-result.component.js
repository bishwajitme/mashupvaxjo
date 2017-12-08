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
var FssearchResultComponent = (function () {
    function FssearchResultComponent() {
    }
    FssearchResultComponent.prototype.ngOnInit = function () {
    };
    return FssearchResultComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], FssearchResultComponent.prototype, "fsname", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FssearchResultComponent.prototype, "fscheckin", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FssearchResultComponent.prototype, "fsid", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FssearchResultComponent.prototype, "fsdescription", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FssearchResultComponent.prototype, "fslocation", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FssearchResultComponent.prototype, "fslat", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FssearchResultComponent.prototype, "fslon", void 0);
FssearchResultComponent = __decorate([
    Component({
        selector: 'app-fssearch-result',
        templateUrl: './fssearch-result.component.html'
    }),
    __metadata("design:paramtypes", [])
], FssearchResultComponent);
export { FssearchResultComponent };
//# sourceMappingURL=/Users/bishwajithalder/mashup-master/src/src/app/fssearch/fssearch-result.component.js.map