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
var uiSemanticPopup = (function () {
    function uiSemanticPopup(el) {
        this.element = el.nativeElement;
    }
    uiSemanticPopup.prototype.ngOnInit = function () {
        var t = this;
        if (t.options == undefined) {
            t.options = {};
        }
        $(t.element).popup(t.options);
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticPopup.prototype, "options", void 0);
    uiSemanticPopup = __decorate([
        core_1.Directive({
            selector: '[ui-popup]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
    ], uiSemanticPopup);
    return uiSemanticPopup;
    var _a;
}());
exports.uiSemanticPopup = uiSemanticPopup;
//# sourceMappingURL=popup.directive.js.map