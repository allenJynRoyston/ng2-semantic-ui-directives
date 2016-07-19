// HOW TO USE:
// options: http://semantic-ui.com/modules/embed.html#/settings
/*
.ui.embed(ui-embed [options]="{source: 'youtube', id: 'jcd3ygLQjvQ', placeholder: 'http://dummyimage.com/600x400/000/fff', autoplay: true}")
*/
declare var $:any;

import {Directive, ElementRef, Input} from '@angular/core';
@Directive({
  selector: '[ui-embed]'
})
export class uiSemanticEmbed {
  @Input('options') options:any;

  constructor(private el: ElementRef) {
    var t = this;
    setTimeout(function(){
      if(t.options == undefined){
        t.options = {}
      }
      $(el.nativeElement).embed(t.options)
    })
  }
}
