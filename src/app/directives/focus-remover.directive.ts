import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: 'button, a'
})
export class FocusRemoverDirective {
  constructor(private elRef: ElementRef) {}

  @HostListener('click') onClick() {
    setTimeout(() => {
      this.elRef.nativeElement.blur();
    });
  }
}
