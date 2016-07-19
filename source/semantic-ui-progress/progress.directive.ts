// HOW TO USE:
/*
#myProgress.ui.indicating.progress(ui-progress [options]="{total: 5, value: 1}")
  .bar
    .progress
  .label Progress!
button.ui.button(ui-progress-button [options]="{selector: '#myProgress',  total: 0, value: 5}")
  | Reset
button.ui.button(ui-progress-button [options]="{selector: '#myProgress',  total: 5, value: 5}")
  | Done

*/

declare var $:any;

import {Directive, ElementRef, Input} from '@angular/core';
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
