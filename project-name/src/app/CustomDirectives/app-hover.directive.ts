import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class AppHoverDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { 

  }

  @HostBinding  ('style.backgroundColor') bgColor: string = '#282828B';
  @HostBinding  ('style.border') border: string = 'none';
  @HostBinding  ('style.color') textColor: string = 'white';

  @HostListener('mouseenter') onMouseEnter() {
    this.bgColor = 'white';
    this.border = '#282828 3px solid';
    this.textColor = '#282828';
  }

  @HostListener('mouseout') onMouseOut() {
    this.bgColor = '#282828';
    this.border = 'none';
    this.textColor = 'white';
  }

}
