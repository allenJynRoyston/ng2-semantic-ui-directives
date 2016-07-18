// HOW TO USE
/*

FORM
.ui.form
  .inline.fields
    label How often do you use checkboxes?
    .field
      #checkbox1.ui.radio.checkbox
        input(type='radio', name='frequency')
        label
          a(ui-checkbox [options]="{selector: '#checkbox1'}") Once a week
    .field
      #checkbox2.ui.radio.checkbox
        input(type='radio', name='frequency')
        label
          a(ui-checkbox [options]="{selector: '#checkbox2'}") 2-3 times a week
    .field
      #checkbox3.ui.radio.checkbox
        input(type='radio', name='frequency')
        label
          a(ui-checkbox [options]="{selector: '#checkbox3'}") Once a day
    .field
      #checkbox4.ui.radio.checkbox
        input(type='radio', name='frequency')
        label
          a(ui-checkbox [options]="{selector: '#checkbox4'}") Twice a day

SLIDER
a(ui-checkbox [options]="{selector: '#mySlider', init: true}") Click here or the slider
br
#mySlider.ui.slider.checkbox
  input(type='checkbox')
  label Accept terms and conditions
  
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
var uiSemanticCheckbox = (function () {
    function uiSemanticCheckbox(el) {
        this.el = el;
        var t = this;
        setTimeout(function () {
            if (t.options == undefined) {
                t.options = { init: false, selector: ".checkbox" };
            }
            if (t.options.init) {
                $(t.options.selector).checkbox('toggle');
            }
        });
    }
    uiSemanticCheckbox.prototype.onClick = function () {
        var t = this;
        $(t.options.selector).checkbox('toggle');
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticCheckbox.prototype, "options", void 0);
    uiSemanticCheckbox = __decorate([
        core_1.Directive({
            selector: '[ui-checkbox]',
            host: {
                '(click)': 'onClick()'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], uiSemanticCheckbox);
    return uiSemanticCheckbox;
}());
exports.uiSemanticCheckbox = uiSemanticCheckbox;
//# sourceMappingURL=checkbox.directive.js.map