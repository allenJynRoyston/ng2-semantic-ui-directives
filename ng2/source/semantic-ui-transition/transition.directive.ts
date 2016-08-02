declare var $:any;
import {Directive, OnInit, ElementRef, Input, EventEmitter } from '@angular/core';

@Directive({
  selector: '[ui-transition-onload]',
  host: {

  }
})
export class uiSemanticTransitionOnload {
  @Input('options') options:any

  public element:any;

  constructor(el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(){
    var t = this;
    if(t.options == undefined){
      t.options = {animation : 'fade'}
    }
    if(t.options.loop){
      $(t.element)
      .transition('set looping')
    }
    $(t.element).transition(t.options)
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
