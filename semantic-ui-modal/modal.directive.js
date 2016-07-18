// HOW TO USE:
// options: http://semantic-ui.com/modules/modal.html#/settings
/*
// OPEN MODAL button
a(ui-modal-action [options]="{selector: '#myModal'}") Open Modal

// ADD ACTUAL MODAL WITH SETTINGS (set TRANSITION behavior on here or on MODAL BUTTON)
#myModal.ui.modal(ui-modal [options]="{closable: false, allowMultiple: true, transition: '<list of animations>', duration: 250}")
  i.close.icon
  .header
    | Modal Title
  .image.content
    .image
      | An image can appear on left or an icon
    .description
      | A description can appear on the right
  .actions
    .ui.button Cancel
    .ui.button OK
*/
// LIST OF ANIMATIONS
/*
  fade
  scalefade left/right/up/down
  horizontal/vertical flip
  drop
  fly left/right/up/down
  slide right/left/up/down
  jiggle
  tada
  bounce
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
var uiSemanticModal = (function () {
    function uiSemanticModal(el) {
        this.el = el;
        this.selector = ".modal";
        var t = this;
        setTimeout(function () {
            if (t.options == undefined) {
                t.options = {};
            }
            $(el.nativeElement).modal(t.options);
        });
    }
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticModal.prototype, "options", void 0);
    uiSemanticModal = __decorate([
        core_1.Directive({
            selector: '[ui-modal]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], uiSemanticModal);
    return uiSemanticModal;
}());
exports.uiSemanticModal = uiSemanticModal;
var uiSemanticModalAction = (function () {
    function uiSemanticModalAction() {
    }
    uiSemanticModalAction.prototype.onClick = function () {
        var t = this;
        if (t.options == undefined) {
            t.options = {};
        }
        console.log(t.options);
        $(t.options.selector)
            .modal('toggle')
            .modal(t.options);
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