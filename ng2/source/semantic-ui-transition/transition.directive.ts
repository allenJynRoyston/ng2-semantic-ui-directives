// HOW TO USE:

/*
ONLOAD:
center(ui-transition-onload [options]='{animation: "fade in", duration: 2000}')
  img.logo(src='assets/images/logo.png' style='width: auto; height: 50px')


ON HOVER:
center(ui-transition-hover [options]='{animation: "jiggle"}')
  img.logo(src='assets/images/logo.png' style='width: auto; height: 50px')


ON CLICK:
center#myImage
  img.logo(src='assets/images/logo.png' style='width: auto; height: 50px')
button.ui.button(ui-transition-button [options]='{selector: "#myImage", animation: "jiggle"}') Click


*/



declare var $:any;

import {Directive, ElementRef, Input} from '@angular/core';
@Directive({
  selector: '[ui-transition-onload]',
  host: {

  }
})
export class uiSemanticTransitionOnload {
  @Input('options') options:any

  constructor(private el: ElementRef){
    var t = this;
    setTimeout(function(){
      if(t.options == undefined){
        t.options = {animation : 'fade'}
      }
      if(t.options.loop){
        $(el.nativeElement)
        .transition('set looping')
      }
      $(el.nativeElement).transition(t.options)
    })
  }

}

@Directive({
  selector: '[ui-transition-button]',
  host: {
    '(click)':      'onClick()'
  }
})
export class uiSemanticTransitionButton {
  @Input('options') options:any

  onClick(){
    var t = this;
    if(t.options == undefined){
      t.options = {}
    }
    $(t.options.selector)
    .transition(t.options)
    if(t.options.loop){
      $(t.options.selector)
      .transition('set looping')
    }
    else{
      $(t.options.selector)
      .transition('remove looping')
    }
  }

}


@Directive({
  selector: '[ui-transition-hover]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
  }
})
export class uiSemanticTransitionHover {
  @Input('options') options:any
  self:any;

  constructor(private el: ElementRef){
    this.self = el.nativeElement;
  }

  onMouseEnter(){
    var t = this;
    if(t.options == undefined){
      t.options = {}
    }
    $(t.self)
    .transition(t.options)
    if(t.options.loop){
      $(t.self)
      .transition('set looping')
    }
    else{
      $(t.self)
      .transition('remove looping')
    }
  }

}
