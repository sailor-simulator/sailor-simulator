import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: 'button, a'
})
export class FocusRemover {
  constructor(private elRef: ElementRef) {}

  @HostListener('click') onClick() {
    this.elRef.nativeElement.blur();
  }
}