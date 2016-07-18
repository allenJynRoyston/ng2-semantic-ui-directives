// HOW TO USE:
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
var uiSemanticTransitionOnload = (function () {
    function uiSemanticTransitionOnload(el) {
        this.el = el;
        var t = this;
        setTimeout(function () {
            if (t.options == undefined) {
                t.options = { animation: 'fade' };
            }
            if (t.options.loop) {
                $(el.nativeElement)
                    .transition('set looping');
            }
            $(el.nativeElement).transition(t.options);
        });
    }
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticTransitionOnload.prototype, "options", void 0);
    uiSemanticTransitionOnload = __decorate([
        core_1.Directive({
            selector: '[ui-transition-onload]',
            host: {}
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], uiSemanticTransitionOnload);
    return uiSemanticTransitionOnload;
}());
exports.uiSemanticTransitionOnload = uiSemanticTransitionOnload;
var uiSemanticTransitionButton = (function () {
    function uiSemanticTransitionButton() {
    }
    uiSemanticTransitionButton.prototype.onClick = function () {
        var t = this;
        if (t.options == undefined) {
            t.options = {};
        }
        $(t.options.selector)
            .transition(t.options);
        if (t.options.loop) {
            $(t.options.selector)
                .transition('set looping');
        }
        else {
            $(t.options.selector)
                .transition('remove looping');
        }
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticTransitionButton.prototype, "options", void 0);
    uiSemanticTransitionButton = __decorate([
        core_1.Directive({
            selector: '[ui-transition-button]',
            host: {
                '(click)': 'onClick()'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], uiSemanticTransitionButton);
    return uiSemanticTransitionButton;
}());
exports.uiSemanticTransitionButton = uiSemanticTransitionButton;
var uiSemanticTransitionHover = (function () {
    function uiSemanticTransitionHover(el) {
        this.el = el;
        this.self = el.nativeElement;
    }
    uiSemanticTransitionHover.prototype.onMouseEnter = function () {
        var t = this;
        if (t.options == undefined) {
            t.options = {};
        }
        $(t.self)
            .transition(t.options);
        if (t.options.loop) {
            $(t.self)
                .transition('set looping');
        }
        else {
            $(t.self)
                .transition('remove looping');
        }
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticTransitionHover.prototype, "options", void 0);
    uiSemanticTransitionHover = __decorate([
        core_1.Directive({
            selector: '[ui-transition-hover]',
            host: {
                '(mouseenter)': 'onMouseEnter()',
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], uiSemanticTransitionHover);
    return uiSemanticTransitionHover;
}());
exports.uiSemanticTransitionHover = uiSemanticTransitionHover;
//# sourceMappingURL=transition.directive.js.map