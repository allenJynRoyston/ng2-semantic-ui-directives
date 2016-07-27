// HOW TO USE:
// options: http://semantic-ui.com/modules/modal.html#/settings
/*
// OPEN MODAL button
a(ui-modal-action [options]="{selector: '#myModal'}") Open Modal

// ADD ACTUAL MODAL WITH SETTINGS (set TRANSITION behavior on here or on MODAL BUTTON)
#myModal.ui.modal(ui-modal [options]="{closable: false, allowMultiple: true, transition: '<list of animations>', duration: 250}")
  i.close.icon
  .header
    | Modal Title
  .image.content
    .image
      | An image can appear on left or an icon
    .description
      | A description can appear on the right
  .actions
    .ui.button Cancel
    .ui.button OK
*/
// LIST OF ANIMATIONS
/*
  fade
  scalefade left/right/up/down
  horizontal/vertical flip
  drop
  fly left/right/up/down
  slide right/left/up/down
  jiggle
  tada
  bounce
*/


declare var $:any;

import {Directive, ElementRef, Input} from '@angular/core';
@Directive({
  selector: '[ui-modal]'
})
export class uiSemanticModal {
  @Input('options') options:any
  private selector = ".modal";

  constructor(private el: ElementRef) {
    var t = this;
    setTimeout(function(){
      if(t.options == undefined){
        t.options = {}
      }

      $(el.nativeElement).modal(t.options)
    })
  }

}


@Directive({
  selector: '[ui-modal-action]',
  host: {
    '(click)':      'onClick()'
  }
})
export class uiSemanticModalAction {
  @Input('options') options:any;

  public _public = {
            selector: ""
          }

  onClick(){
      var t = this;

      if(t.options.selector != undefined){
        t._public.selector = t.options.selector;
        delete t.options["selector"];
      }

      $(t._public.selector)
        .modal(t.options)
        .modal('show')

  }


}
