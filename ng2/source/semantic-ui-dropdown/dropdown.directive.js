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
var uiSemanticDropdown = (function () {
    function uiSemanticDropdown(el) {
        this.el = el;
        this.uiDropdownChange = new core_1.EventEmitter();
        var t = this;
        setTimeout(function () {
            if (t.options == undefined) {
                t.options = {};
            }
            t.options.onChange = function (value, text, choice) {
                var arr = new Array;
                if (value.constructor === Array) {
                    for (var i = 0; i < value.length; i++) {
                        var s = value[i];
                        var r = s.match(/'([^']+)'/)[1];
                        arr.push(r);
                    }
                    t.uiDropdownChange.emit(arr);
                }
                else {
                    t.uiDropdownChange.emit({ value: value });
                }
            };
            $(el.nativeElement)
                .dropdown(t.options);
        });
    }
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticDropdown.prototype, "options", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], uiSemanticDropdown.prototype, "uiDropdownChange", void 0);
    uiSemanticDropdown = __decorate([
        core_1.Directive({
            selector: '[ui-dropdown]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
    ], uiSemanticDropdown);
    return uiSemanticDropdown;
    var _a;
}());
exports.uiSemanticDropdown = uiSemanticDropdown;
//# sourceMappingURL=dropdown.directive.js.map