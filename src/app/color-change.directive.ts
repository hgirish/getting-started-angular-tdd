import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[colorChange]',
  standalone: true
})
export class ColorChangeDirective {
@Input() colorChange!: string;
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }
  ngOnInit(){
    this.renderer.setStyle(
      this.elementRef.nativeElement, 'color', this.colorChange
    )
  }

}
