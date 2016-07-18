"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var uiSemanticRating = (function () {
    function uiSemanticRating(el) {
        this.el = el;
        var t = this;
        setTimeout(function () {
            if (t.options == undefined) {
                t.options = {};
            }
            $(el.nativeElement).rating(t.options);
        });
    }
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticRating.prototype, "options", void 0);
    uiSemanticRating = __decorate([
        core_1.Directive({
            selector: '[ui-rating]',
            host: {}
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], uiSemanticRating);
    return uiSemanticRating;
}());
exports.uiSemanticRating = uiSemanticRating;
//# sourceMappingURL=rating.directive.js.map