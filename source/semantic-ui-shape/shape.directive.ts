// HOW TO USE:
/*

#shape1.ui.shape
  .sides
    p Content 1
  .sides
    p Content 2
  .sides
    p Content 2

.ui.huge.facebook.button(ui-shape [options]="{selector: '#shape1', animation: 'flip left'}")
  | Come at me bro
  i.right.arrow.icon

*/

declare var $:any;

import {Directive, ElementRef, Input} from '@angular/core';
@Directive({
  selector: '[ui-shape]',
  host: {
    '(click)':      'onClick()'
  }
})
export class uiSemanticShape {
  @Input('options') options:any

  onClick(){
    var i = this;

    if(i.options == undefined){
      i.options = {selector: '.shape', animation: 'flip up'}
    }
    else{
      if(i.options.selector == undefined){
        i.options.selector = '.shape'
      }
      if(i.options.selector == undefined){
        i.options.animation = '.flip up'
      }
    }
    $(i.options.selector).shape(i.options.animation)
  }

}
