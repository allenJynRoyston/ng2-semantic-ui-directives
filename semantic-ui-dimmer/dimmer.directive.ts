// HOW TO USE:
// options:  http://semantic-ui.com/modules/dimmer.html#/settings
/*
.blurring.dimmable.image(ui-dimmer [options]="{on: 'hover'}")
  .ui.dimmer
    .content
      .center
        Only shows up when blurred
*/

declare var $:any;

import {Directive, ElementRef, Input} from '@angular/core';
@Directive({
  selector: '[ui-dimmer]',
  host: {
    '(click)':      'onClick()'
  }
})
export class uiSemanticDimmer {
	@Input('options') options:any

  constructor(private el: ElementRef) {
		var i = this;

    setTimeout(function(){
      if(i.options == undefined){
        i.options = {}
      }
      $(el.nativeElement).dimmer(i.options)
    })
  }

  onClick(){
    $(this.el.nativeElement).dimmer('toggle');
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
      var i = this;
      if(i.options != undefined){
        if(i.options.selector != undefined){
          $(i.options.selector).dimmer('toggle')
        }
      }
  }
}
