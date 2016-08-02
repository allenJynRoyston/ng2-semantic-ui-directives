declare var $:any;
import {Directive, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[ui-dropdown]'
})
export class uiSemanticDropdown {
  @Input('options') options:any;
  @Output() uiDropdownChange = new EventEmitter();

  public element:any;

  constructor(private el: ElementRef) {
    var t = this;
    setTimeout(function(){
      if(t.options == undefined){
        t.options = {}
      }
      t.options.onChange = function(value:any, text:any, choice:any){
        var arr = new Array;
        if(value.constructor === Array){
          for (var i = 0; i < value.length; i++){
            var s = value[i];
            var r = s.match(/'([^']+)'/)[1];
            arr.push(r)
          }
          t.uiDropdownChange.emit(arr);
        }
        else{
          t.uiDropdownChange.emit({value: value});
        }
      }

      $(el.nativeElement)
        .dropdown(t.options)

    })
  }


}
