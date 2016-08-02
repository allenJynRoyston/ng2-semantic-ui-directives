declare var $:any;
import {Directive, OnInit, ElementRef, Input, EventEmitter } from '@angular/core';

@Directive({
  selector: '[ui-modal]'
})
export class uiSemanticModal {
  @Input('options') options:any
  private selector = ".modal";

  public element:any;

  constructor(el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(){
    var t = this;
    if(t.options == undefined){
      t.options = {}
    }

    $(t.element).modal(t.options)
  }

}


@Directive({
  selector: '[ui-modal-action]',
  host: {
    '(click)':      'onClick()'
  }
})
export class uiSemanticModalAction {
  @Input('options') options:any;

  public _public = {
            selector: ""
          }

  onClick(){
      var t = this;

      if(t.options.selector != undefined){
        t._public.selector = t.options.selector;
        delete t.options["selector"];
      }

      $(t._public.selector)
        .modal(t.options)
        .modal('show')

  }

}
