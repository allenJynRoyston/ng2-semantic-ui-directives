// HOW TO USE:
/*

POPUP ON OTHER ElementRef
img#myImage
  img.logo(src='assets/images/logo.png' style='width: auto; height: 50px')
.ui.segment
  .ui.button(ui-popup [options]="{position: 'right center', target: '#myImage', title: 'Title!', content: 'I am content!', on: 'hover'}") Hover Me

SIMPLE POPUP
.ui.segment
  .ui.button(ui-popup [options]="{content: 'I am a popup!', on: 'click'}") Hover Me
*/

declare var $:any;

import {Directive, ElementRef, Input} from '@angular/core';
@Directive({
  selector: '[ui-popup]'
})
export class uiSemanticPopup {
  @Input('options') options:any

  constructor(private el: ElementRef){
    var t = this;
    setTimeout(function(){
      if(t.options == undefined){
         t.options = {}
      }
      $(el.nativeElement).popup(t.options)
    })
  }


}
