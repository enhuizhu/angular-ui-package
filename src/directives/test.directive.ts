import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({ selector: '[test]'})
export class TestDirective implements AfterViewInit {
  constructor(private el:ElementRef) {

  }

  ngAfterViewInit() {
    this.el.nativeElement.innerHTML = 'just a test';
  }
}