// HOW TO USE:
// options available: http://semantic-ui.com/modules/dropdown.html#/settings
/*
.ui.dropdown(ui-dropdown [options]="{on: 'hover'}")
  .text File
  i.dropdown.icon
  .menu
    .item New
    .item
      span.description ctrl + o
      |       Open...
    .item
      span.description ctrl + s
      |       Save as...
    .item
      span.description ctrl + r
      |       Rename
    .item Make a copy
    .item
      i.folder.icon
      |       Move to folder
    .item
      i.trash.icon
      |       Move to trash
    .divider
    .item Download As...
    .item
      i.dropdown.icon
      |       Publish To Web
      .menu
        .item Google Docs
        .item Google Drive
        .item Dropbox
        .item Adobe Creative Cloud
        .item Private FTP
        .item Another Service...
    .item E-mail Collaborators

*/

declare var $:any;

import {Directive, ElementRef, Input} from '@angular/core';
@Directive({
  selector: '[ui-dropdown]'
})
export class uiSemanticDropdown {
  @Input('options') options:any;

  constructor(private el: ElementRef) {
    var t = this;
    setTimeout(function(){
      if(t.options == undefined){
        t.options = {}
      }
      $(el.nativeElement).dropdown(t.options)
    })
  }


}
