import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appHoverEffect]"
})
export class HoverEffectDirective {
  // @Input() opacVal: number;
  @Input('appHoverEffect') opacVal: number;

  constructor(private el: ElementRef) {}

  @HostListener("mouseenter")
  onmouseenter() {
    this.setOpacity(this.opacVal || 0.1);
  }

  @HostListener("mouseleave")
  onmouseleave() {
    this.setOpacity(1);
  }

  private setOpacity(opacity: number): void {
    this.el.nativeElement.style.opacity = opacity;
  }
}
