declare var $:any;
import {Directive, OnInit, ElementRef, Input, EventEmitter } from '@angular/core';


@Directive({
  selector: '[ui-sidebar]',
  host: {
    '(click)':      'onClick()'
  }
})
export class uiSemanticSidebar {
  @Input('options') options:any

  ngOnInit() {
    var t = this;
    $(t.options.selector).sidebar()
  }

  onClick(){
    var t = this;

    if(t.options == undefined){
      t.options = {selector: '.sidebar'}
    }
    else{
        if(t.options.animation == undefined){
           t.options.animation = "scale down"
        }
    }

    $(t.options.selector)
      .sidebar('setting', 'transition', t.options.animation)
      .sidebar('toggle')
  }

}
