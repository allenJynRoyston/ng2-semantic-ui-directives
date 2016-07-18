// HOW TO USE
// options: http://semantic-ui.com/modules/accordion.html#/settings
/*
.ui.styled.accordion(ui-accordian [options]="{exclusive: false, duration: 250}")
  .active.title
    i.dropdown.icon
    |     Level 1
  .content
    | Welcome to level 1
    .accordion
      .title
        i.dropdown.icon
        |           Level 1A
      .content
        p Level 1A Contents
        .accordion
          .title
            i.dropdown.icon
            |               Level 1A-A
          .content
            | Level 1A-A Contents
          .title
            i.dropdown.icon
            |               Level 1A-B
          .content
            | Level 1A-B Contents
      .title
        i.dropdown.icon
        |           Level 1B
      .content
        | Level 1B Contents
      .title
        i.dropdown.icon
        |           Level 1C
      .content
        | Level 1C Contents
  .title
    i.dropdown.icon
    |     Level 2
  .content
    p Welcome to level 2
    .accordion
      .title
        i.dropdown.icon
        |         Level 2A
      .content
        p Level 2A Contents
        .accordion
          .title
            i.dropdown.icon
            |               Level 2A-A
          .content
            | Level 2A-A Contents
          .title
            i.dropdown.icon
            |               Level 2A-B
          .content
            | Level 2A-B Contents
      .title
        i.dropdown.icon
        |           Level 2B
      .content
        | Level 2B Contents
      .title
        i.dropdown.icon
        |           Level 2C
      .content
        | Level 2C Contents
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
var uiSemanticAccordian = (function () {
    function uiSemanticAccordian(el) {
        var t = this;
        setTimeout(function () {
            if (t.options == undefined) {
                t.options = {};
            }
            $(el.nativeElement).accordion(t.options);
        });
    }
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticAccordian.prototype, "options", void 0);
    uiSemanticAccordian = __decorate([
        core_1.Directive({
            selector: '[ui-accordian]',
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], uiSemanticAccordian);
    return uiSemanticAccordian;
}());
exports.uiSemanticAccordian = uiSemanticAccordian;
//# sourceMappingURL=accordian.directive.js.map