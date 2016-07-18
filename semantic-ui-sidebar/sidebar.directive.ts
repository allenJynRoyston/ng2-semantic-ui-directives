declare var $:any;

import {Directive, ElementRef, Input} from '@angular/core';
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
