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
var uiSemanticModal = (function () {
    function uiSemanticModal(el) {
        this.selector = ".modal";
        this.element = el.nativeElement;
    }
    uiSemanticModal.prototype.ngOnInit = function () {
        var t = this;
        if (t.options == undefined) {
            t.options = {};
        }
        $(t.element).modal(t.options);
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticModal.prototype, "options", void 0);
    uiSemanticModal = __decorate([
        core_1.Directive({
            selector: '[ui-modal]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
    ], uiSemanticModal);
    return uiSemanticModal;
    var _a;
}());
exports.uiSemanticModal = uiSemanticModal;
var uiSemanticModalAction = (function () {
    function uiSemanticModalAction() {
        this._public = {
            selector: ""
        };
    }
    uiSemanticModalAction.prototype.onClick = function () {
        var t = this;
        if (t.options.selector != undefined) {
            t._public.selector = t.options.selector;
            delete t.options["selector"];
        }
        $(t._public.selector)
            .modal(t.options)
            .modal('show');
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticModalAction.prototype, "options", void 0);
    uiSemanticModalAction = __decorate([
        core_1.Directive({
            selector: '[ui-modal-action]',
            host: {
                '(click)': 'onClick()'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], uiSemanticModalAction);
    return uiSemanticModalAction;
}());
exports.uiSemanticModalAction = uiSemanticModalAction;
//# sourceMappingURL=modal.directive.js.map