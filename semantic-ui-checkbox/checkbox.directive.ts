// HOW TO USE
/*

FORM
.ui.form
  .inline.fields
    label How often do you use checkboxes?
    .field
      #checkbox1.ui.radio.checkbox
        input(type='radio', name='frequency')
        label
          a(ui-checkbox [options]="{selector: '#checkbox1'}") Once a week
    .field
      #checkbox2.ui.radio.checkbox
        input(type='radio', name='frequency')
        label
          a(ui-checkbox [options]="{selector: '#checkbox2'}") 2-3 times a week
    .field
      #checkbox3.ui.radio.checkbox
        input(type='radio', name='frequency')
        label
          a(ui-checkbox [options]="{selector: '#checkbox3'}") Once a day
    .field
      #checkbox4.ui.radio.checkbox
        input(type='radio', name='frequency')
        label
          a(ui-checkbox [options]="{selector: '#checkbox4'}") Twice a day

SLIDER
a(ui-checkbox [options]="{selector: '#mySlider', init: true}") Click here or the slider
br
#mySlider.ui.slider.checkbox
  input(type='checkbox')
  label Accept terms and conditions
  
*/

declare var $:any;

import {Directive, ElementRef, Input} from '@angular/core';
@Directive({
  selector: '[ui-checkbox]',
  host: {
    '(click)':      'onClick()'
  }
})
export class uiSemanticCheckbox {
  @Input('options') options:any

  constructor(private el: ElementRef) {
    var t = this;
    setTimeout(function(){
      if(t.options == undefined){
        t.options = {init: false, selector: ".checkbox"}
      }
      if(t.options.init){
        $(t.options.selector).checkbox('toggle')
      }
    })
  }

  onClick(){
    var t = this;
      $(t.options.selector).checkbox('toggle')
  }

}
