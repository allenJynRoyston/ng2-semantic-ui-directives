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
var uiSemanticSidebar = (function () {
    function uiSemanticSidebar() {
    }
    uiSemanticSidebar.prototype.onClick = function () {
        var i = this;
        if (i.options == undefined) {
            i.options = { selector: '.sidebar' };
        }
        else {
            if (i.options.animation == undefined) {
                i.options.animation = "scale down";
            }
        }
        $(i.options.selector)
            .sidebar('setting', 'transition', i.options.animation)
            .sidebar('toggle');
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticSidebar.prototype, "options", void 0);
    uiSemanticSidebar = __decorate([
        core_1.Directive({
            selector: '[ui-sidebar]',
            host: {
                '(click)': 'onClick()'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], uiSemanticSidebar);
    return uiSemanticSidebar;
}());
exports.uiSemanticSidebar = uiSemanticSidebar;
//# sourceMappingURL=sidebar.directive.js.map