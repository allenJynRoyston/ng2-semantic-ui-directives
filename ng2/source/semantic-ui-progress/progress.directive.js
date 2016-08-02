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
var uiSemanticProgress = (function () {
    function uiSemanticProgress(el) {
        this.element = el.nativeElement;
    }
    uiSemanticProgress.prototype.ngOnInit = function () {
        var t = this;
        if (t.options == undefined) {
            t.options = {};
        }
        $(t.element).progress(t.options);
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticProgress.prototype, "options", void 0);
    uiSemanticProgress = __decorate([
        core_1.Directive({
            selector: '[ui-progress]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
    ], uiSemanticProgress);
    return uiSemanticProgress;
    var _a;
}());
exports.uiSemanticProgress = uiSemanticProgress;
var uiSemanticProgressButton = (function () {
    function uiSemanticProgressButton() {
        this.init = false;
        this.selector = "";
    }
    uiSemanticProgressButton.prototype.onClick = function () {
        var t = this;
        if (t.options == undefined) {
            t.options = { selector: '.progress' };
        }
        if (!t.init) {
            t.selector = t.options.selector;
            t.init = true;
        }
        delete t.options["selector"];
        $(t.selector).progress(t.options);
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticProgressButton.prototype, "options", void 0);
    uiSemanticProgressButton = __decorate([
        core_1.Directive({
            selector: '[ui-progress-button]',
            host: {
                '(click)': 'onClick()'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], uiSemanticProgressButton);
    return uiSemanticProgressButton;
}());
exports.uiSemanticProgressButton = uiSemanticProgressButton;
//# sourceMappingURL=progress.directive.js.map