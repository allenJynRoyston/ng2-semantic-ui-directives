declare var $:any;
import {Directive, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';


@Directive({
  selector: '[ui-rating]',
  host: {

  }
})
export class uiSemanticRating {
  @Input('options') options:any
  @Output() uiRatingChange = new EventEmitter();

  public element:any;

  constructor(el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(){
    var t = this;
    if(t.options == undefined){
      t.options = {}
    }
    t.options.onRate = function(value:any){
      t.uiRatingChange.emit(value);
    }
    $(t.element).rating(t.options)
  }

}
