import { Directive, ElementRef, AfterViewInit } from '@angular/core';
var TestDirective = (function () {
    function TestDirective(el) {
        this.el = el;
    }
    TestDirective.prototype.ngAfterViewInit = function () {
        this.el.nativeElement.innerHTML = 'just a test';
    };
    TestDirective.decorators = [
        { type: Directive, args: [{ selector: '[test]' },] },
    ];
    TestDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    return TestDirective;
}());
export { TestDirective };
//# sourceMappingURL=test.directive.js.map