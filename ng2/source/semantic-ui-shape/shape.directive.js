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
var uiSemanticShape = (function () {
    function uiSemanticShape() {
    }
    uiSemanticShape.prototype.onClick = function () {
        var i = this;
        if (i.options == undefined) {
            i.options = { selector: '.shape', animation: 'flip up' };
        }
        else {
            if (i.options.selector == undefined) {
                i.options.selector = '.shape';
            }
            if (i.options.selector == undefined) {
                i.options.animation = '.flip up';
            }
        }
        $(i.options.selector).shape(i.options.animation);
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticShape.prototype, "options", void 0);
    uiSemanticShape = __decorate([
        core_1.Directive({
            selector: '[ui-shape]',
            host: {
                '(click)': 'onClick()'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], uiSemanticShape);
    return uiSemanticShape;
}());
exports.uiSemanticShape = uiSemanticShape;
//# sourceMappingURL=shape.directive.js.map