import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setBackground]',
  standalone: true,
})
export class SetBackground implements OnInit {
  // private element: ElementRef;
  constructor(private element: ElementRef,private renderer: Renderer2) {
    // this.element = element;
  }

  ngOnInit() {
    // This directive can be used to set a background color or image
    // Additional logic can be added here if needed
    // this.element.nativeElement.style.backgroundColor = '#36454F'; // Example background color
    // this.element.nativeElement.style.color = 'white'; // Example text color
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#36454F'); // Example background color
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white'); // Example text
    this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is example title'); // Example attribute
  }
}