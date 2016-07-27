declare var $:any;
import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[ui-accordian]',
})
export class uiSemanticAccordian {
  @Input('options') options:any

  constructor(el: ElementRef) {
    var t = this;
    setTimeout(function(){
      if(t.options == undefined){
        t.options = {}
      }
      $(el.nativeElement).accordion(t.options)
    })
  }
}


@Directive({
  selector: '[ui-rating]',
  host: {

  }
})
export class uiSemanticRating {
  @Input('options') options:any

  constructor(private el: ElementRef){
    var t = this;
    setTimeout(function(){
      if(t.options == undefined){
        t.options = {}
      }
      $(el.nativeElement).rating(t.options)
    })
  }
}


@Directive({
  selector: '[ui-dimmer]',
  host: {
    '(click)':      'onClick()'
  }
})
export class uiSemanticDimmer {
	@Input('options') options:any

  constructor(private el: ElementRef) {
		var i = this;

    setTimeout(function(){
      if(i.options == undefined){
        i.options = {}
      }
      $(el.nativeElement).dimmer(i.options)
    })
  }

  onClick(){
    $(this.el.nativeElement).dimmer('toggle');
  }
}


@Directive({
  selector: '[ui-dimmer-button]',
  host: {
    '(click)':      'onClick()'
  }
})
export class uiSemanticDimmerButton {
	@Input('options') options:any

  onClick(){
      var i = this;
      if(i.options != undefined){
        if(i.options.selector != undefined){
          $(i.options.selector).dimmer('toggle')
        }
      }
  }
}



@Directive({
  selector: '[ui-modal]'
})
export class uiSemanticModal {
  @Input('options') options:any
  private selector = ".modal";

  constructor(private el: ElementRef) {
    var t = this;
    setTimeout(function(){
      if(t.options == undefined){
        t.options = {}
      }

      $(el.nativeElement).modal(t.options)
    })
  }

}


@Directive({
  selector: '[ui-modal-action]',
  host: {
    '(click)':      'onClick()'
  }
})
export class uiSemanticModalAction {
  @Input('options') options:any

  onClick(){
      var t = this;

      if(t.options == undefined){
        t.options = {}
      }
      $(t.options.selector)
        .modal('show')
        .modal(t.options)

  }


}


@Directive({
  selector: '[ui-sidebar]',
  host: {
    '(click)':      'onClick()'
  }
})
export class uiSemanticSidebar {
  @Input('options') options:any

  onClick(){
    var i = this;

    if(i.options == undefined){
      i.options = {selector: '.sidebar'}
    }
    else{
        if(i.options.animation == undefined){
            i.options.animation = "scale down"
        }
    }
    $(i.options.selector)
      .sidebar('setting', 'transition', i.options.animation)
      .sidebar('toggle')
  }

}


@Directive({
  selector: '[ui-checkbox]',
  host: {
    '(click)':      'onClick()'
  }
})
export class uiSemanticCheckbox {
  @Input('options') options:any

  constructor(private el: ElementRef) {
    var t = this;
    setTimeout(function(){
      if(t.options == undefined){
        t.options = {init: false, selector: ".checkbox"}
      }
      if(t.options.init){
        $(t.options.selector).checkbox('toggle')
      }
    })
  }

  onClick(){
    var t = this;
      $(t.options.selector).checkbox('toggle')
  }

}


@Directive({
  selector: '[ui-dropdown]'
})
export class uiSemanticDropdown {
  @Input('options') options:any;

  constructor(private el: ElementRef) {
    var t = this;
    setTimeout(function(){
      if(t.options == undefined){
        t.options = {}
      }
      $(el.nativeElement).dropdown(t.options)
    })
  }


}



@Directive({
  selector: '[ui-embed]'
})
export class uiSemanticEmbed {
  @Input('options') options:any;

  constructor(private el: ElementRef) {
    var t = this;
    setTimeout(function(){
      if(t.options == undefined){
        t.options = {}
      }
      $(el.nativeElement).embed(t.options)
    })
  }
}


@Directive({
  selector: '[ui-popup]'
})
export class uiSemanticPopup {
  @Input('options') options:any

  constructor(private el: ElementRef){
    var t = this;
    setTimeout(function(){
      if(t.options == undefined){
         t.options = {}
      }
      $(el.nativeElement).popup(t.options)
    })
  }


}


@Directive({
  selector: '[ui-tab]'
})
export class uiSemanticTab {
  @Input('options') options:any

  constructor(private el: ElementRef){
    var t = this;
    setTimeout(function(){
      if(t.options == undefined){
        t.options = {}
      }
      $(el.nativeElement).find('.item').tab(t.options)
    })
  }

}



@Directive({
  selector: '[ui-progress]'
})
export class uiSemanticProgress {
  @Input('options') options:any

  constructor(private el: ElementRef){
    var t = this;
    setTimeout(function(){
      if(t.options == undefined){
        t.options = {}
      }
      $(el.nativeElement).progress(t.options)
    })
  }
}


@Directive({
  selector: '[ui-progress-button]',
  host: {
    '(click)':      'onClick()'
  }
})
export class uiSemanticProgressButton {
  @Input('options') options:any
  private init = false;
  private selector = "";

  onClick(){
    var t = this;

    if(t.options == undefined){
      t.options = {selector: '.progress'}
    }

    if(!t.init){
      t.selector = t.options.selector;
      t.init = true
    }

    delete t.options["selector"]
    $(t.selector).progress(t.options)

  }
}




@Directive({
  selector: '[ui-transition-onload]',
  host: {

  }
})
export class uiSemanticTransitionOnload {
  @Input('options') options:any

  constructor(private el: ElementRef){
    var t = this;
    setTimeout(function(){
      if(t.options == undefined){
        t.options = {animation : 'fade'}
      }
      if(t.options.loop){
        $(el.nativeElement)
        .transition('set looping')
      }
      $(el.nativeElement).transition(t.options)
    })
  }

}

@Directive({
  selector: '[ui-transition-button]',
  host: {
    '(click)':      'onClick()'
  }
})
export class uiSemanticTransitionButton {
  @Input('options') options:any

  onClick(){
    var t = this;
    if(t.options == undefined){
      t.options = {}
    }
    $(t.options.selector)
    .transition(t.options)
    if(t.options.loop){
      $(t.options.selector)
      .transition('set looping')
    }
    else{
      $(t.options.selector)
      .transition('remove looping')
    }
  }

}


@Directive({
  selector: '[ui-transition-hover]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
  }
})
export class uiSemanticTransitionHover {
  @Input('options') options:any
  self:any;

  constructor(private el: ElementRef){
    this.self = el.nativeElement;
  }

  onMouseEnter(){
    var t = this;
    if(t.options == undefined){
      t.options = {}
    }
    $(t.self)
    .transition(t.options)
    if(t.options.loop){
      $(t.self)
      .transition('set looping')
    }
    else{
      $(t.self)
      .transition('remove looping')
    }
  }

}


@Directive({
  selector: '[ui-visibility]',
  host: {

  }
})
export class uiSemanticVisibility {
  @Input('options') options:any

  constructor(private el: ElementRef){
    var i = this,
        build = null as any;

    setTimeout(function(){
      if(i.options == undefined){
        build = {}
      }
      else{
        build = i.options
      }

      //------------------------------------------------------ BOTTOM PASSED
      // define onBottomPassed behavior
      if (typeof i.options.onBottomPassed != "undefined") {
          var selector1b = i.options.onBottomPassed.selector,
              action1b = i.options.onBottomPassed.action,
              params1b = i.options.onBottomPassed.param;

          build.onBottomPassed = function(calculations:any){
            $(selector1b)[action1b](params1b)
          }
      }

      // define onBottomPassedReverse behavior
      if (typeof i.options.onBottomPassedReverse != "undefined") {
          var selector2b = i.options.onBottomPassedReverse.selector,
              action2b = i.options.onBottomPassedReverse.action,
              params2b = i.options.onBottomPassedReverse.param;
          build.onBottomPassedReverse = function(calculations:any){
            $(selector2b)[action2b](params2b)
          }
      }
      //------------------------------------------------------

      //------------------------------------------------------ BOTTOM PASSED VISIBLE
      // define onBottomPassed behavior
      if (typeof i.options.onBottomVisibleReverse != "undefined") {
          var selector1bv = i.options.onBottomVisibleReverse.selector,
              action1bv = i.options.onBottomVisibleReverse.action,
              params1bv = i.options.onBottomVisibleReverse.param;

          build.onBottomVisibleReverse = function(calculations:any){
            $(selector1bv)[action1bv](params1bv)
          }
      }

      // define onBottomPassedReverse behavior
      if (typeof i.options.onBottomVisibleReverse != "undefined") {
          var selector2bv = i.options.onBottomVisibleReverse.selector,
              action2bv = i.options.onBottomVisibleReverse.action,
              params2bv = i.options.onBottomVisibleReverse.param;
          build.onBottomVisibleReverse = function(calculations:any){
            $(selector2bv)[action2bv](params2bv)
          }
      }
      //------------------------------------------------------

      //------------------------------------------------------ TOP PASSED
      // define onTopPassed behavior
      if (typeof i.options.onTopPassed != "undefined") {
          var selector1t = i.options.onTopPassed.selector,
              action1t = i.options.onTopPassed.action,
              params1t = i.options.onTopPassed.param;

          build.onTopPassed = function(calculations:any){
            $(selector1t)[action1t](params1t)
          }
      }

      // define onTopPassedReverse behavior
      if (typeof i.options.onTopPassedReverse != "undefined") {
          var selector2t = i.options.onTopPassedReverse.selector,
              action2t = i.options.onTopPassedReverse.action,
              params2t = i.options.onTopPassedReverse.param;
          build.onTopPassedReverse = function(calculations:any){
            $(selector2t)[action2t](params2t)
          }
      }
      //------------------------------------------------------

      //------------------------------------------------------ onPassing
      // define onTopPassed behavior
      if (typeof i.options.onTopVisible != "undefined") {
          var selector1p = i.options.onTopVisible.selector,
              action1p = i.options.onTopVisible.action,
              params1p = i.options.onTopVisible.param;

          build.onTopPassed = function(calculations:any){
            $(selector1p)[action1p](params1p)
          }
      }

      // define onTopPassedReverse behavior
      if (typeof i.options.onTopVisibleReverse != "undefined") {
          var selector2p = i.options.onTopVisibleReverse.selector,
              action2p = i.options.onTopVisibleReverse.action,
              params2p = i.options.onTopVisibleReverse.param;
          build.onTopVisibleReverse = function(calculations:any){
            $(selector2p)[action2p](params2p)
          }
      }
      //------------------------------------------------------


      //------------------------------------------------------ onPassingReverse
      // define onTopPassed behavior
      if (typeof i.options.onPassing != "undefined") {
          var selector1pr = i.options.onPassing.selector,
              action1pr = i.options.onPassing.action,
              params1pr = i.options.onPassing.param;

          build.onPassing = function(calculations:any){
            $(selector1pr)[action1pr](params1pr)
          }
      }

      // define onTopPassedReverse behavior
      if (typeof i.options.onPassingReverse != "undefined") {
          var selector2pr = i.options.onPassingReverse.selector,
              action2pr = i.options.onPassingReverse.action,
              params2pr = i.options.onPassingReverse.param;
          build.onPassingReverse = function(calculations:any){
            $(selector2pr)[action2pr](params2pr)
          }
      }
      //------------------------------------------------------

      //------------------------------------------------------  ONUPDATE
      build.onUpdate = function(calculations:any) {
        //console.log(calculations:any)
      }
      //------------------------------------------------------

      $(el.nativeElement).visibility(build)

    })
  }

}
