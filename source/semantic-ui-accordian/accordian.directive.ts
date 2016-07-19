// HOW TO USE
// options: http://semantic-ui.com/modules/accordion.html#/settings
/*
.ui.styled.accordion(ui-accordian [options]="{exclusive: false, duration: 250}")
  .active.title
    i.dropdown.icon
    |     Level 1
  .content
    | Welcome to level 1
    .accordion
      .title
        i.dropdown.icon
        |           Level 1A
      .content
        p Level 1A Contents
        .accordion
          .title
            i.dropdown.icon
            |               Level 1A-A
          .content
            | Level 1A-A Contents
          .title
            i.dropdown.icon
            |               Level 1A-B
          .content
            | Level 1A-B Contents
      .title
        i.dropdown.icon
        |           Level 1B
      .content
        | Level 1B Contents
      .title
        i.dropdown.icon
        |           Level 1C
      .content
        | Level 1C Contents
  .title
    i.dropdown.icon
    |     Level 2
  .content
    p Welcome to level 2
    .accordion
      .title
        i.dropdown.icon
        |         Level 2A
      .content
        p Level 2A Contents
        .accordion
          .title
            i.dropdown.icon
            |               Level 2A-A
          .content
            | Level 2A-A Contents
          .title
            i.dropdown.icon
            |               Level 2A-B
          .content
            | Level 2A-B Contents
      .title
        i.dropdown.icon
        |           Level 2B
      .content
        | Level 2B Contents
      .title
        i.dropdown.icon
        |           Level 2C
      .content
        | Level 2C Contents
*/


declare var $:any;

import {Directive, ElementRef, Input} from '@angular/core';
@Directive({
  selector: '[ui-accordian]',
})
export class uiSemanticAccordian {
  @Input('options') options:any

  constructor(el: ElementRef) {
    var t = this;
    setTimeout(function(){
      if(t.options == undefined){
        t.options = {}
      }
      $(el.nativeElement).accordion(t.options)
    })
  }
}
