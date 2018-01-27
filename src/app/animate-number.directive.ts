import { Directive, ElementRef, Input } from "@angular/core";
// import * as $ from "jquery";
import { AfterViewInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { count } from "rxjs/operators/count";
// import * as animateNumber from "jquery.animateNumber";

@Directive({
  selector: "[appAnimateNumber]"
})
export class AnimateNumberDirective implements AfterViewInit {
  @Input("appAnimateNumber") count: number;
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    $(this.el.nativeElement).animateNumber({
      number: this.count
    });
    // $(this.el.nativeElement).css("color", "yellow");
  }
}
