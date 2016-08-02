declare var $:any;
import {Directive, OnInit, ElementRef, Input, EventEmitter } from '@angular/core';


@Directive({
  selector: '[ui-progress]'
})
export class uiSemanticProgress {
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
    $(t.element).progress(t.options)
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
