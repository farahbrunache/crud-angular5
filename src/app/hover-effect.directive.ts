import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appHoverEffect]"
})
export class HoverEffectDirective {
  constructor(private el: ElementRef) {}

  @HostListener("mouseenter")
  onmouseenter() {
    this.setOpacity(0.5);
  }

  @HostListener("mouseleave")
  onmouseleave() {
    this.setOpacity(1);
  }

  private setOpacity(opacity: number): void {
    this.el.nativeElement.style.opacity = opacity;
  }
}
