import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: 'button, a'
})
export class FocusRemoverDirective {
  constructor(private elRef: ElementRef) {}

  @HostListener('touchend') onTouchEnd() {
    setTimeout(() => {
      console.log(true);
      this.elRef.nativeElement.blur();
    });
  }
}
