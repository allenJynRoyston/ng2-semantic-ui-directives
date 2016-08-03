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
var uiSemanticAccordion = (function () {
    function uiSemanticAccordion(el) {
        this.element = el.nativeElement;
    }
    uiSemanticAccordion.prototype.ngOnInit = function () {
        var t = this;
        if (t.options == undefined) {
            t.options = {};
        }
        $(t.element).accordion(t.options);
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticAccordion.prototype, "options", void 0);
    uiSemanticAccordion = __decorate([
        core_1.Directive({
            selector: '[ui-accordion]',
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
    ], uiSemanticAccordion);
    return uiSemanticAccordion;
    var _a;
}());
exports.uiSemanticAccordion = uiSemanticAccordion;
//# sourceMappingURL=accordion.directive.js.map