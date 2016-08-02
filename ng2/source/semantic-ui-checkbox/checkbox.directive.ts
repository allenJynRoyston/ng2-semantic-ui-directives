declare var $:any
import {Directive, OnInit, ElementRef, Input, EventEmitter } from '@angular/core';

@Directive({
  selector: '[ui-checkbox-button]',
  host: {
    '(click)':      'onClick()'
  }
})
export class uiSemanticCheckbox {
  @Input('options') options:any

  public element:any;

  constructor(el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(){
    var t = this;
    if(t.options == undefined){
      t.options = {init: false, selector: ".checkbox"}
    }
    if(t.options.init){
      $(t.options.selector).checkbox('toggle')
    }

    $(t.element).modal(t.options)
  }

  onClick(){
    var t = this;
    $('.ui.checkbox').checkbox('toggle')
  }

}
