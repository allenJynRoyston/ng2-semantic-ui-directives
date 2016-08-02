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
        this.element = el.nativeElement;
    }
    uiSemanticAccordian.prototype.ngOnInit = function () {
        var t = this;
        if (t.options == undefined) {
            t.options = {};
        }
        $(t.element).accordion(t.options);
    };
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
var uiSemanticRating = (function () {
    function uiSemanticRating(el) {
        this.uiRatingChange = new core_1.EventEmitter();
        this.element = el.nativeElement;
    }
    uiSemanticRating.prototype.ngOnInit = function () {
        var t = this;
        if (t.options == undefined) {
            t.options = {};
        }
        t.options.onRate = function (value) {
            t.uiRatingChange.emit(value);
        };
        $(t.element).rating(t.options);
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticRating.prototype, "options", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], uiSemanticRating.prototype, "uiRatingChange", void 0);
    uiSemanticRating = __decorate([
        core_1.Directive({
            selector: '[ui-rating]',
            host: {}
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], uiSemanticRating);
    return uiSemanticRating;
}());
exports.uiSemanticRating = uiSemanticRating;
var uiSemanticDimmer = (function () {
    function uiSemanticDimmer(el) {
        this.element = el.nativeElement;
    }
    uiSemanticDimmer.prototype.ngOnInit = function () {
        var t = this;
        if (t.options == undefined) {
            t.options = {};
        }
        $(t.element).dimmer(t.options);
    };
    uiSemanticDimmer.prototype.onClick = function () {
        var t = this;
        $(t.element).dimmer('toggle');
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
        var t = this;
        if (t.options != undefined) {
            if (t.options.selector != undefined) {
                $(t.options.selector).dimmer('toggle');
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
var uiSemanticModal = (function () {
    function uiSemanticModal(el) {
        this.selector = ".modal";
        this.element = el.nativeElement;
    }
    uiSemanticModal.prototype.ngOnInit = function () {
        var t = this;
        if (t.options == undefined) {
            t.options = {};
        }
        $(t.element).modal(t.options);
    };
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
        this._public = {
            selector: ""
        };
    }
    uiSemanticModalAction.prototype.onClick = function () {
        var t = this;
        if (t.options.selector != undefined) {
            t._public.selector = t.options.selector;
            delete t.options["selector"];
        }
        $(t._public.selector)
            .modal(t.options)
            .modal('show');
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
var uiSemanticSidebar = (function () {
    function uiSemanticSidebar() {
    }
    uiSemanticSidebar.prototype.ngOnInit = function () {
        var t = this;
        $(t.options.selector).sidebar();
    };
    uiSemanticSidebar.prototype.onClick = function () {
        var t = this;
        if (t.options == undefined) {
            t.options = { selector: '.sidebar' };
        }
        else {
            if (t.options.animation == undefined) {
                t.options.animation = "scale down";
            }
        }
        $(t.options.selector)
            .sidebar('setting', 'transition', t.options.animation)
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
var uiSemanticCheckbox = (function () {
    function uiSemanticCheckbox(el) {
        this.element = el.nativeElement;
    }
    uiSemanticCheckbox.prototype.ngOnInit = function () {
        var t = this;
        if (t.options == undefined) {
            t.options = { init: false, selector: ".checkbox" };
        }
        if (t.options.init) {
            $(t.options.selector).checkbox('toggle');
        }
        $(t.element).modal(t.options);
    };
    uiSemanticCheckbox.prototype.onClick = function () {
        var t = this;
        $('.ui.checkbox').checkbox('toggle');
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticCheckbox.prototype, "options", void 0);
    uiSemanticCheckbox = __decorate([
        core_1.Directive({
            selector: '[ui-checkbox-button]',
            host: {
                '(click)': 'onClick()'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], uiSemanticCheckbox);
    return uiSemanticCheckbox;
}());
exports.uiSemanticCheckbox = uiSemanticCheckbox;
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
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], uiSemanticDropdown);
    return uiSemanticDropdown;
}());
exports.uiSemanticDropdown = uiSemanticDropdown;
var uiSemanticEmbed = (function () {
    function uiSemanticEmbed(el) {
        this.element = el.nativeElement;
    }
    uiSemanticEmbed.prototype.ngOnInit = function () {
        var t = this;
        if (t.options == undefined) {
            t.options = {};
        }
        $(t.element).embed(t.options);
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticEmbed.prototype, "options", void 0);
    uiSemanticEmbed = __decorate([
        core_1.Directive({
            selector: '[ui-embed]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], uiSemanticEmbed);
    return uiSemanticEmbed;
}());
exports.uiSemanticEmbed = uiSemanticEmbed;
var uiSemanticPopup = (function () {
    function uiSemanticPopup(el) {
        this.element = el.nativeElement;
    }
    uiSemanticPopup.prototype.ngOnInit = function () {
        var t = this;
        if (t.options == undefined) {
            t.options = {};
        }
        $(t.element).popup(t.options);
    };
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
var uiSemanticTab = (function () {
    function uiSemanticTab(el) {
        this.element = el.nativeElement;
    }
    uiSemanticTab.prototype.ngOnInit = function () {
        var t = this;
        if (t.options == undefined) {
            t.options = {};
        }
        $(t.element).find('.item').tab(t.options);
    };
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
var uiSemanticProgress = (function () {
    function uiSemanticProgress(el) {
        this.element = el.nativeElement;
    }
    uiSemanticProgress.prototype.ngOnInit = function () {
        var t = this;
        if (t.options == undefined) {
            t.options = {};
        }
        $(t.element).progress(t.options);
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticProgress.prototype, "options", void 0);
    uiSemanticProgress = __decorate([
        core_1.Directive({
            selector: '[ui-progress]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], uiSemanticProgress);
    return uiSemanticProgress;
}());
exports.uiSemanticProgress = uiSemanticProgress;
var uiSemanticProgressButton = (function () {
    function uiSemanticProgressButton() {
        this.init = false;
        this.selector = "";
    }
    uiSemanticProgressButton.prototype.onClick = function () {
        var t = this;
        if (t.options == undefined) {
            t.options = { selector: '.progress' };
        }
        if (!t.init) {
            t.selector = t.options.selector;
            t.init = true;
        }
        delete t.options["selector"];
        $(t.selector).progress(t.options);
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticProgressButton.prototype, "options", void 0);
    uiSemanticProgressButton = __decorate([
        core_1.Directive({
            selector: '[ui-progress-button]',
            host: {
                '(click)': 'onClick()'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], uiSemanticProgressButton);
    return uiSemanticProgressButton;
}());
exports.uiSemanticProgressButton = uiSemanticProgressButton;
var uiSemanticShape = (function () {
    function uiSemanticShape() {
    }
    uiSemanticShape.prototype.onClick = function () {
        var i = this;
        if (i.options == undefined) {
            i.options = { selector: '.shape', animation: 'flip up' };
        }
        else {
            if (i.options.selector == undefined) {
                i.options.selector = '.shape';
            }
            if (i.options.selector == undefined) {
                i.options.animation = '.flip up';
            }
        }
        $(i.options.selector).shape(i.options.animation);
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticShape.prototype, "options", void 0);
    uiSemanticShape = __decorate([
        core_1.Directive({
            selector: '[ui-shape]',
            host: {
                '(click)': 'onClick()'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], uiSemanticShape);
    return uiSemanticShape;
}());
exports.uiSemanticShape = uiSemanticShape;
var uiSemanticTransitionOnload = (function () {
    function uiSemanticTransitionOnload(el) {
        this.element = el.nativeElement;
    }
    uiSemanticTransitionOnload.prototype.ngOnInit = function () {
        var t = this;
        if (t.options == undefined) {
            t.options = { animation: 'fade' };
        }
        if (t.options.loop) {
            $(t.element)
                .transition('set looping');
        }
        $(t.element).transition(t.options);
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticTransitionOnload.prototype, "options", void 0);
    uiSemanticTransitionOnload = __decorate([
        core_1.Directive({
            selector: '[ui-transition-onload]',
            host: {}
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], uiSemanticTransitionOnload);
    return uiSemanticTransitionOnload;
}());
exports.uiSemanticTransitionOnload = uiSemanticTransitionOnload;
var uiSemanticTransitionButton = (function () {
    function uiSemanticTransitionButton() {
    }
    uiSemanticTransitionButton.prototype.onClick = function () {
        var t = this;
        if (t.options == undefined) {
            t.options = {};
        }
        $(t.options.selector)
            .transition(t.options);
        if (t.options.loop) {
            $(t.options.selector)
                .transition('set looping');
        }
        else {
            $(t.options.selector)
                .transition('remove looping');
        }
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticTransitionButton.prototype, "options", void 0);
    uiSemanticTransitionButton = __decorate([
        core_1.Directive({
            selector: '[ui-transition-button]',
            host: {
                '(click)': 'onClick()'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], uiSemanticTransitionButton);
    return uiSemanticTransitionButton;
}());
exports.uiSemanticTransitionButton = uiSemanticTransitionButton;
var uiSemanticTransitionHover = (function () {
    function uiSemanticTransitionHover(el) {
        this.el = el;
        this.self = el.nativeElement;
    }
    uiSemanticTransitionHover.prototype.onMouseEnter = function () {
        var t = this;
        if (t.options == undefined) {
            t.options = {};
        }
        $(t.self)
            .transition(t.options);
        if (t.options.loop) {
            $(t.self)
                .transition('set looping');
        }
        else {
            $(t.self)
                .transition('remove looping');
        }
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticTransitionHover.prototype, "options", void 0);
    uiSemanticTransitionHover = __decorate([
        core_1.Directive({
            selector: '[ui-transition-hover]',
            host: {
                '(mouseenter)': 'onMouseEnter()',
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], uiSemanticTransitionHover);
    return uiSemanticTransitionHover;
}());
exports.uiSemanticTransitionHover = uiSemanticTransitionHover;
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
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], uiSemanticVisibility);
    return uiSemanticVisibility;
}());
exports.uiSemanticVisibility = uiSemanticVisibility;
//# sourceMappingURL=semantic-ui.directive.js.map