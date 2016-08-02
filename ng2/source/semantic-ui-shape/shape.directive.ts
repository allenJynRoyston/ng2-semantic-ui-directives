declare var $:any;
import {Directive, OnInit, ElementRef, Input, EventEmitter } from '@angular/core';

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
