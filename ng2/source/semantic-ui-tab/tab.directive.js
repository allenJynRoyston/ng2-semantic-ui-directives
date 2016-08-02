// HOW TO USE:
/*

.ui.top.attached.tabular.menu(ui-tab)
  a.item(data-tab='first') First
  a.item(data-tab='second') Second
  a.item.active(data-tab='third') Third
.ui.bottom.attached.tab.segment(data-tab='first')
  | First
.ui.bottom.attached.tab.segment(data-tab='second')
  | Second
.ui.bottom.attached.tab.segment.active(data-tab='third')
  | Third


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
var uiSemanticTab = (function () {
    function uiSemanticTab(el) {
        this.el = el;
        var t = this;
        setTimeout(function () {
            if (t.options == undefined) {
                t.options = {};
            }
            $(el.nativeElement).find('.item').tab(t.options);
        });
    }
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticTab.prototype, "options", void 0);
    uiSemanticTab = __decorate([
        core_1.Directive({
            selector: '[ui-tab]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], uiSemanticTab);
    return uiSemanticTab;
}());
exports.uiSemanticTab = uiSemanticTab;
//# sourceMappingURL=tab.directive.js.map