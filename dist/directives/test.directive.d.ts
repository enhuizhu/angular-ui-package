import { ElementRef, AfterViewInit } from '@angular/core';
export declare class TestDirective implements AfterViewInit {
    private el;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
}
