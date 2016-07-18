// HOW TO USE:
// options available: http://semantic-ui.com/modules/dropdown.html#/settings
/*
.ui.dropdown(ui-dropdown [options]="{on: 'hover'}")
  .text File
  i.dropdown.icon
  .menu
    .item New
    .item
      span.description ctrl + o
      |       Open...
    .item
      span.description ctrl + s
      |       Save as...
    .item
      span.description ctrl + r
      |       Rename
    .item Make a copy
    .item
      i.folder.icon
      |       Move to folder
    .item
      i.trash.icon
      |       Move to trash
    .divider
    .item Download As...
    .item
      i.dropdown.icon
      |       Publish To Web
      .menu
        .item Google Docs
        .item Google Drive
        .item Dropbox
        .item Adobe Creative Cloud
        .item Private FTP
        .item Another Service...
    .item E-mail Collaborators

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
var uiSemanticDropdown = (function () {
    function uiSemanticDropdown(el) {
        this.el = el;
        var t = this;
        setTimeout(function () {
            if (t.options == undefined) {
                t.options = {};
            }
            $(el.nativeElement).dropdown(t.options);
        });
    }
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticDropdown.prototype, "options", void 0);
    uiSemanticDropdown = __decorate([
        core_1.Directive({
            selector: '[ui-dropdown]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], uiSemanticDropdown);
    return uiSemanticDropdown;
}());
exports.uiSemanticDropdown = uiSemanticDropdown;
//# sourceMappingURL=dropdown.directive.js.map