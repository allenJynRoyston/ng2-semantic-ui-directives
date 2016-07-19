// HOW TO USE:
/*

POPUP ON OTHER ElementRef
img#myImage
  img.logo(src='assets/images/logo.png' style='width: auto; height: 50px')
.ui.segment
  .ui.button(ui-popup [options]="{position: 'right center', target: '#myImage', title: 'Title!', content: 'I am content!', on: 'hover'}") Hover Me

SIMPLE POPUP
.ui.segment
  .ui.button(ui-popup [options]="{content: 'I am a popup!', on: 'click'}") Hover Me
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
var uiSemanticPopup = (function () {
    function uiSemanticPopup(el) {
        this.el = el;
        var t = this;
        setTimeout(function () {
            if (t.options == undefined) {
                t.options = {};
            }
            $(el.nativeElement).popup(t.options);
        });
    }
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticPopup.prototype, "options", void 0);
    uiSemanticPopup = __decorate([
        core_1.Directive({
            selector: '[ui-popup]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], uiSemanticPopup);
    return uiSemanticPopup;
}());
exports.uiSemanticPopup = uiSemanticPopup;
//# sourceMappingURL=popup.directive.js.map