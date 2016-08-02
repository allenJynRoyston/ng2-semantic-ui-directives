// HOW TO USE:
/*
<div class='ui star rating' ui-rating [options]="{initialRating: 2, maxRating: 4}")></div>
*/
declare var $:any;

import {Directive, ElementRef, Input} from '@angular/core';
@Directive({
  selector: '[ui-rating]',
  host: {

  }
})
export class uiSemanticRating {
  @Input('options') options:any

  constructor(private el: ElementRef){
    var t = this;
    setTimeout(function(){
      if(t.options == undefined){
        t.options = {}
      }
      $(el.nativeElement).rating(t.options)
    })
  }
}
