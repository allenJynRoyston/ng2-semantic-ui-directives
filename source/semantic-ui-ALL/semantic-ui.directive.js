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
var uiSemanticRating = (function () {
    function uiSemanticRating(el) {
        this.el = el;
        var t = this;
        setTimeout(function () {
            if (t.options == undefined) {
                t.options = {};
            }
            $(el.nativeElement).rating(t.options);
        });
    }
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticRating.prototype, "options", void 0);
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
var uiSemanticEmbed = (function () {
    function uiSemanticEmbed(el) {
        this.el = el;
        var t = this;
        setTimeout(function () {
            if (t.options == undefined) {
                t.options = {};
            }
            $(el.nativeElement).embed(t.options);
        });
    }
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
var uiSemanticProgress = (function () {
    function uiSemanticProgress(el) {
        this.el = el;
        var t = this;
        setTimeout(function () {
            if (t.options == undefined) {
                t.options = {};
            }
            $(el.nativeElement).progress(t.options);
        });
    }
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
var uiSemanticTransitionOnload = (function () {
    function uiSemanticTransitionOnload(el) {
        this.el = el;
        var t = this;
        setTimeout(function () {
            if (t.options == undefined) {
                t.options = { animation: 'fade' };
            }
            if (t.options.loop) {
                $(el.nativeElement)
                    .transition('set looping');
            }
            $(el.nativeElement).transition(t.options);
        });
    }
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
        this.el = el;
        var i = this, build = null;
        setTimeout(function () {
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
            $(el.nativeElement).visibility(build);
        });
    }
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