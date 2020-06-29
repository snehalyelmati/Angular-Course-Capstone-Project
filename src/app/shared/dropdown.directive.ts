/****************************************
 DID NOT USE THIS DIRECTIVE, INCOMPLETE
 OR NOT SUITABLE FOR THIS IMPLEMENTATION
 ****************************************/


import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseenter') mouseEnter(event: Event) {
    // this.renderer.addClass(this.elRef.nativeElement, 'show');
    // this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bolder');
    console.log('entered...');
    return true;
  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    // this.renderer.removeClass(this.elRef.nativeElement, 'show');
    // this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'normal');
    console.log('left...');
    return false;
  }
}

// sample setup 1
// export class DropdownDirective {
//   @HostBinding('class.show') isShow = false;
//
//   @HostListener('click') toggleOpen() {
//     this.isShow = !this.isShow;
//     console.log(this.isShow);
//   }
// }
