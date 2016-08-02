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
var uiSemanticVisibility = (function () {
    function uiSemanticVisibility(el) {
        this.element = el.nativeElement;
    }
    uiSemanticVisibility.prototype.ngOnInit = function () {
        var i = this, build = null;
        if (i.options == undefined) {
            build = {};
        }
        else {
            build = i.options;
        }
        //------------------------------------------------------ BOTTOM PASSED
        // define onBottomPassed behavior
        if (typeof i.options.onBottomPassed != "undefined") {
            var selector1b = i.options.onBottomPassed.selector, action1b = i.options.onBottomPassed.action, params1b = i.options.onBottomPassed.param;
            build.onBottomPassed = function (calculations) {
                $(selector1b)[action1b](params1b);
            };
        }
        // define onBottomPassedReverse behavior
        if (typeof i.options.onBottomPassedReverse != "undefined") {
            var selector2b = i.options.onBottomPassedReverse.selector, action2b = i.options.onBottomPassedReverse.action, params2b = i.options.onBottomPassedReverse.param;
            build.onBottomPassedReverse = function (calculations) {
                $(selector2b)[action2b](params2b);
            };
        }
        //------------------------------------------------------
        //------------------------------------------------------ BOTTOM PASSED VISIBLE
        // define onBottomPassed behavior
        if (typeof i.options.onBottomVisibleReverse != "undefined") {
            var selector1bv = i.options.onBottomVisibleReverse.selector, action1bv = i.options.onBottomVisibleReverse.action, params1bv = i.options.onBottomVisibleReverse.param;
            build.onBottomVisibleReverse = function (calculations) {
                $(selector1bv)[action1bv](params1bv);
            };
        }
        // define onBottomPassedReverse behavior
        if (typeof i.options.onBottomVisibleReverse != "undefined") {
            var selector2bv = i.options.onBottomVisibleReverse.selector, action2bv = i.options.onBottomVisibleReverse.action, params2bv = i.options.onBottomVisibleReverse.param;
            build.onBottomVisibleReverse = function (calculations) {
                $(selector2bv)[action2bv](params2bv);
            };
        }
        //------------------------------------------------------
        //------------------------------------------------------ TOP PASSED
        // define onTopPassed behavior
        if (typeof i.options.onTopPassed != "undefined") {
            var selector1t = i.options.onTopPassed.selector, action1t = i.options.onTopPassed.action, params1t = i.options.onTopPassed.param;
            build.onTopPassed = function (calculations) {
                $(selector1t)[action1t](params1t);
            };
        }
        // define onTopPassedReverse behavior
        if (typeof i.options.onTopPassedReverse != "undefined") {
            var selector2t = i.options.onTopPassedReverse.selector, action2t = i.options.onTopPassedReverse.action, params2t = i.options.onTopPassedReverse.param;
            build.onTopPassedReverse = function (calculations) {
                $(selector2t)[action2t](params2t);
            };
        }
        //------------------------------------------------------
        //------------------------------------------------------ onPassing
        // define onTopPassed behavior
        if (typeof i.options.onTopVisible != "undefined") {
            var selector1p = i.options.onTopVisible.selector, action1p = i.options.onTopVisible.action, params1p = i.options.onTopVisible.param;
            build.onTopPassed = function (calculations) {
                $(selector1p)[action1p](params1p);
            };
        }
        // define onTopPassedReverse behavior
        if (typeof i.options.onTopVisibleReverse != "undefined") {
            var selector2p = i.options.onTopVisibleReverse.selector, action2p = i.options.onTopVisibleReverse.action, params2p = i.options.onTopVisibleReverse.param;
            build.onTopVisibleReverse = function (calculations) {
                $(selector2p)[action2p](params2p);
            };
        }
        //------------------------------------------------------
        //------------------------------------------------------ onPassingReverse
        // define onTopPassed behavior
        if (typeof i.options.onPassing != "undefined") {
            var selector1pr = i.options.onPassing.selector, action1pr = i.options.onPassing.action, params1pr = i.options.onPassing.param;
            build.onPassing = function (calculations) {
                $(selector1pr)[action1pr](params1pr);
            };
        }
        // define onTopPassedReverse behavior
        if (typeof i.options.onPassingReverse != "undefined") {
            var selector2pr = i.options.onPassingReverse.selector, action2pr = i.options.onPassingReverse.action, params2pr = i.options.onPassingReverse.param;
            build.onPassingReverse = function (calculations) {
                $(selector2pr)[action2pr](params2pr);
            };
        }
        //------------------------------------------------------
        //------------------------------------------------------  ONUPDATE
        build.onUpdate = function (calculations) {
            //console.log(calculations:any)
        };
        //------------------------------------------------------
        $(i.element).visibility(build);
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticVisibility.prototype, "options", void 0);
    uiSemanticVisibility = __decorate([
        core_1.Directive({
            selector: '[ui-visibility]',
            host: {}
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
    ], uiSemanticVisibility);
    return uiSemanticVisibility;
    var _a;
}());
exports.uiSemanticVisibility = uiSemanticVisibility;
//# sourceMappingURL=visibility.directive.js.map