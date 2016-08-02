declare var $:any;
import {Directive, OnInit, ElementRef, Input, EventEmitter } from '@angular/core';

@Directive({
  selector: '[ui-embed]'
})
export class uiSemanticEmbed {
  @Input('options') options:any;

  public element:any;

  constructor(el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(){
    var t = this;
    if(t.options == undefined){
      t.options = {}
    }
    $(t.element).embed(t.options)
  }


}
