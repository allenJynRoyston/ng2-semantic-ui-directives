// HOW TO USE
/*

ONCE THIS ELEMENT's BOTTOM PASSSES THE TOP OF THE SCREEN, DO SOMETHING (in this example, it fades the menu)
.space-block-50
center(ui-visibility [options]="{once: false, onBottomPassed: {selector: '.fixed.menu', action: 'transition', params: 'fade in'}, onBottomPassedReverse: {selector: '.fixed.menu', action: 'transition', params: 'fade out'} }")
  img#myImage.logo(src='assets/images/logo.png' style='width: auto; height: 50px')




  ONCE THIS ELEMENT's TOP TOUCHES THE TOP OF THE SCREEN, DO SOMETHING (in this example, it fades the menu)
  .space-block-50
  center(ui-visibility [options]="{once: false, onTopPassed: {selector: '.fixed.menu', action: 'transition', params: 'fade in'}, onTopPassedReverse: {selector: '.fixed.menu', action: 'transition', params: 'fade out'} }")
    img#myImage.logo(src='assets/images/logo.png' style='width: auto; height: 50px')



*/


declare var $:any;

import {Directive, ElementRef, Input} from '@angular/core';
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
