// HOW TO USE:
// options:  http://semantic-ui.com/modules/dimmer.html#/settings
/*
.blurring.dimmable.image(ui-dimmer [options]="{on: 'hover'}")
  .ui.dimmer
    .content
      .center
        Only shows up when blurred
*/
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
var uiSemanticDimmer = (function () {
    function uiSemanticDimmer(el) {
        this.el = el;
        var i = this;
        setTimeout(function () {
            if (i.options == undefined) {
                i.options = {};
            }
            $(el.nativeElement).dimmer(i.options);
        });
    }
    uiSemanticDimmer.prototype.onClick = function () {
        $(this.el.nativeElement).dimmer('toggle');
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticDimmer.prototype, "options", void 0);
    uiSemanticDimmer = __decorate([
        core_1.Directive({
            selector: '[ui-dimmer]',
            host: {
                '(click)': 'onClick()'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], uiSemanticDimmer);
    return uiSemanticDimmer;
}());
exports.uiSemanticDimmer = uiSemanticDimmer;
var uiSemanticDimmerButton = (function () {
    function uiSemanticDimmerButton() {
    }
    uiSemanticDimmerButton.prototype.onClick = function () {
        var i = this;
        if (i.options != undefined) {
            if (i.options.selector != undefined) {
                $(i.options.selector).dimmer('toggle');
            }
        }
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticDimmerButton.prototype, "options", void 0);
    uiSemanticDimmerButton = __decorate([
        core_1.Directive({
            selector: '[ui-dimmer-button]',
            host: {
                '(click)': 'onClick()'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], uiSemanticDimmerButton);
    return uiSemanticDimmerButton;
}());
exports.uiSemanticDimmerButton = uiSemanticDimmerButton;
//# sourceMappingURL=dimmer.directive.js.map