declare var $:any;
import {Directive, OnInit, ElementRef, Input, EventEmitter } from '@angular/core';


@Directive({
  selector: '[ui-dimmer]',
  host: {
    '(click)':      'onClick()'
  }
})
export class uiSemanticDimmer {
	@Input('options') options:any

  public element:any;

  constructor(el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(){
    var t = this;
    if(t.options == undefined){
      t.options = {}
    }
    $(t.element).dimmer(t.options)
  }

  onClick(){
    var t = this;
    $(t.element).dimmer('toggle');
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
      var t = this;
      if(t.options != undefined){
        if(t.options.selector != undefined){
          $(t.options.selector).dimmer('toggle')
        }
      }
  }
}
