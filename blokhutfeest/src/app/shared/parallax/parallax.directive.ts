import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appParallax]',
  standalone: true,
})
export class ParallaxDirective {
  @Input() ratio = 0.5;
  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('window:scroll')
  onScroll() {
    const offset = window.pageYOffset * this.ratio;
    this.el.nativeElement.style.transform = `translateY(${offset}px)`;
  }
}
