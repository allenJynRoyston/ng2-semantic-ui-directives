// HOW TO USE:
/*

.ui.top.attached.tabular.menu(ui-tab)
  a.item(data-tab='first') First
  a.item(data-tab='second') Second
  a.item.active(data-tab='third') Third
.ui.bottom.attached.tab.segment(data-tab='first')
  | First
.ui.bottom.attached.tab.segment(data-tab='second')
  | Second
.ui.bottom.attached.tab.segment.active(data-tab='third')
  | Third


*/

declare var $:any;

import {Directive, ElementRef, Input} from '@angular/core';
@Directive({
  selector: '[ui-tab]'
})
export class uiSemanticTab {
  @Input('options') options:any

  constructor(private el: ElementRef){
    var t = this;
    setTimeout(function(){
      if(t.options == undefined){
        t.options = {}
      }
      $(el.nativeElement).find('.item').tab(t.options)
    })
  }

}
