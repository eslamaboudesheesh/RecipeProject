import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdwone]'
})
export class DropdwoneDirective {
@HostBinding('class.show') isOppen =false;
@HostListener('click') toggleClass(){
    this.isOppen= !this.isOppen ;
  }
  constructor() { }
}
